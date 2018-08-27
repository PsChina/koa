// 原生路由

const Koa = require('koa')

const app = new Koa()

const port = 3000

const main = ctx => {
    const path = ctx.request.path
    let content
    switch(path) {
        case '/link1':
        content = "<div>I'm link1.</div>"
        break
        case '/link2':
        content = "<div>Wellcome to link2.</div>"
        break
        case '/':
        content = '<div>Home</div>'
        break
        default:
        content = '<h1>Not found.</h1>'
        break
    }
    ctx.response.body = content
}

app.use(main)

app.listen(port)

console.log(`Server started at port:${port}.`)