/**
 *  router.js 路由模块
 *  职责:
 *      处理路由
 *      根据不同的请求方法+请求路径设置具体的请求处理函数
 *      模块职责要清晰，单一
 */

// 第二种方式 Express 提供了一种更好的方式，专门用来包装路由的
// 1.创建一个路由容器已经引入第三方包和核心模块
const express = require("express");
const fs = require("fs");
const router = express.Router();
const Student = require("./student");
// 2.把路由都挂载到 路由容器中
// 主页面
router.get("/", (req, res) => {
    Student.find((error, students) => {
        if (error) {
            return res.status(500).send("Server error.")
        } else {
            res.render("index.html", {
                fruits: [
                    "苹果",
                    "香蕉",
                    "橘子",
                    "草莓"
                ],
                //从文件读取的一定是字符串
                //所以这里要手动转成对象
                students: students
            })
        }
    })
})
// 添加学生页面
router.get("/students/new", (req, res) => {
    res.render("new.html");
})
// 处理添加学生页面
router.post("/students/new", (req, res) => {
    // 1. 获取表单数据
    // 2. 处理 将数据保存到 db.json 文件中用以持久化
    // 3. 发送响应
    //  先读取出来，转成对象
    //  然后往对象中 push 数据
    //  然后把对象转化为 字符串
    //  然后把字符串再次写入文件
    let student = req.body;
    Student.add(student,(error)=>{
        if(error){
        return res.status(500).send("Server error.");
        }
    })
    res.redirect("/");
})
// 编辑页面
router.get("/students/edit", (req, res) => {
    let id = req.query.id;
    Student.findById(id, (error,student)=>{
        if(error){
            return res.status(500).send("Server error");
        }
        res.render("edit.html", {
            student:student
        })
    })
})
// 处理编辑学生请求
router.post("/students/edit", (req, res) => {
    let student = req.body;
    student.gender = parseInt(student.gender);
    Student.updata(student,(error)=>{
        if(error){
            res.status(500).send("Server error");
        }
        res.redirect("/");
    })
    
})
// 处理删除请求
router.get =("/students/delete", (req, res) => {
    let id = req.query.id;
    Student.deleteById(id,(error)=>{
        if(error){
            return res.status(500).send("Server error");
        }
        res.redirect("/");
    })
})

// 3.把路由容器导出 module.exports = xxx(导出单个);
module.exports = router;

    // 4.在 app.js 使用
        // 引入 const router = require("./router");
        // 把路由容器挂在到 app 服务中 app.use(router)
