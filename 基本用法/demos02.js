// Context 对象
const Koa = require('koa'); // 获取 koa
const app = new Koa();  // 新建koa实例
const main = ctx => { // main 函数
    ctx.response.body = 'Hello World'; // 默认返回类型是 text/plain
}
app.use(main) // 使用中间件
app.listen(3000); // 监听端口