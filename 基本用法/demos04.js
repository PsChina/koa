// 网页模版
const fs = require('fs'); // 获取fs模块
// fs模块为nodejs的核心模块之一，主要处理文件的读写、复制、删除、重命名等操作。当需要使用该模块时，需要先导入该文件
const Koa = require('koa'); // 获取koa
const app = new Koa(); // 新建实例
const main = ctx => {
    ctx.response.type = 'html'; //  设置响应类型
    ctx.response.body = fs.createReadStream('./template.html'); // 读取文件内容
}
app.use(main);
app.listen(3000) // 监听3000端口