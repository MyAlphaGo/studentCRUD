/**
 * app.js 入口模块
 * 职责：
 *  启动服务
 *  做一些服务相关配置
 *      模板引擎
 *      body-parser 解析表单 POST 请求体
 *      提供静态资源服务
 *  挂载路由
 *  创建，监听端口启动服务
 */

 /**
 *  router.js 路由模块
 *  职责:
 *      处理路由
 *      根据不同的请求方法+请求路径设置具体的请求处理函数
 *      模块职责要清晰，单一
 */

 // 第一种方法
// 将 app.get() 方法都放到一个方法中，然后将这个方法导出，将 app 以参数的形式传入
// 然后在 app.js 中使用 require 方式引入，然后想在哪里使用，调用这个方法即可，调用方法时传入 app 参数即可

const fs = require("fs");

module.exports = function(app){
    // 请求/
    app.get("/",(req,res)=>{
        //balabalabala
    })

}


// 第二种方式 Express 提供了一种更好的方式，专门用来包装路由的
    // 1.创建一个路由容器
        // 首先需要引入 express 第三方包 const express = require("express");
        //然后创建一个路由容器(也是服务器) const router = express.Router();
    // 2.把路由都挂载到 路由容器中
        // router.get("/" (req,res)=>{ balabalabala })

    // 3.把路由容器导出 moudle.exports = xxx(导出单个);
        // moudle.exports = router;

    // 4.在 app.js 使用
        // 引入 const router = require("./router");
        // 把路由容器挂在到 app 服务中 app.use(router)

