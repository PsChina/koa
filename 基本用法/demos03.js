const Koa = require('koa'); // 获取 koa
const app = new Koa();  // 新建koa实例
const main = ctx => { // main 函数
    if(ctx.request.accepts('json')) {
        ctx.response.type = 'json'
        ctx.response.body = { data: 'Hello World.' }
    } else if(ctx.request.accepts('html')) {
        ctx.response.type = 'html'
        ctx.response.body = '<p>Hello World.</p>'
    } else if(ctx.request.accepts('text')) {
        ctx.response.type = 'text'
        ctx.response.body = 'Hello World.'
    } else {
        ctx.response.type = 'xml'
        ctx.response.body = '<data>Hello World.</data>'
    }
}
app.use(main) // 使用中间件
app.listen(3000); // 监听端口