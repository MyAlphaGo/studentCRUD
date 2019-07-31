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

//引入第三方包和核心模块
const express = require("express");
const router = require("./router");
const bodyParser = require("body-parser");

//创建服务器
const app = express();

//配置模板引擎
app.engine("html", require("express-art-template"));

//配置body-parser 中间件（插件，专门用来解析表单post请求体）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//引入静态资源
app.use("/public/",express.static("./public/"));
app.use("/node_modules/",express.static("./node_modules/"));

// 把路由容器挂在到 app 服务中
app.use(router);

app.listen(3000, ()=>{
    console.log("http://127.0.0.1:3000 is running");
})
