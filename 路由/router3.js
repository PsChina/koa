// koa 处理网站静态资源
const Koa = require('koa')
const path = require('path')
const serve = require('koa-static')
const port = 3100
const app = new Koa()
const main = serve(path.join(__dirname)) // join只是单纯的拼接字符串
app.use(main)
app.listen(port)
console.log(`Server started at port:${port}`)
console.log(`Enter http://loaclhost:${port}/static/koa.jpg or http://loaclhost:${port}/static/learn.jpg in the browser.`)