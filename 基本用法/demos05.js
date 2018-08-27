// 测试 string 类型的body
const Koa = require('koa'); // 获取koa
const app = new Koa(); // 新建实例
const main = ctx => {
    ctx.response.type = 'html'; //  设置响应类型
    ctx.response.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello World! (type: string)</h1>
    </body>
    </html>
    `
}
app.use(main);
app.listen(3000) // 监听3000端口

// http://www.koacn.com/ (详细api)