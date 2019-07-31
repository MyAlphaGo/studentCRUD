# Express - crud

## 模块化思想

模块如何划分：
- 模块职责要单一

## 起步

- 初始化
- 安装依赖
- 模板设计

## 路由设计

| 请求方法 | 请求路径 | get参数 | post参数 |备注 |
|---------|---------|---------|----------|----|
|  GET    | /               |      |                            | 渲染页面             |
|  GET    | /students/new   |      |                            | 渲染添加学生页面      |
|  POST   | /students/new   |      | name,age,gender,hobbires   | 处理添加学生请求      |
|  GET    | /students/edit  |id    |                            | 渲染编辑页面          |
|  POST   | /students/edit  |      | name,age,gender,hobbires   | 处理编辑学生请求      |
|  GET    | /students/delete|id    |                            | 处理删除请求          |


#### 自己编写的步骤
- 处理模板
- 配置开放静态资源
- 配置模板引擎
- 简单路由： /students 渲染静态页出来
- 路由设计（就是上面的表格）
- 单独提取路由模块
- 由于接下来的一系列的业务操作都需要处理文件数据，所以我们需要封装 student.js
- 先写好 student.js 文件结构
    - 查询所有学生列表的API find
    - findById
    - add
    - undataById
    - deleteById
- 实现具体功能
    - 实现上面的具体功能
    - 接收请求中的数据(get, post)
        - req.query
        - req.body
    - 调用数据操作的 API 处理数据
    - 根据操作结果给客户发送响应
- 业务功能顺序
    - 列表
    - 添加
    - 编辑
    - 删除
 

