// 重定向
const Koa = require('koa')
const route = require('koa-route')
const app = new Koa()
const port = 3000
app.use(route.get('/',ctx=>{
    ctx.response.type = 'html'
    ctx.body = `
        <h1>Home</h1>
    `
}))
app.use(route.get('/page1',ctx=>{
    ctx.response.type = 'html'
    ctx.body = `
        <div>page1</div>
    `
}))
app.use(route.get('/page2',ctx=>{
    ctx.response.type = 'html'
    ctx.body = `
        <div>page2</div>
    `
}))
app.use(route.get('/page3',ctx=>{
    ctx.response.type = 'html'
    ctx.body = `
        <div>page3</div>
    `
}))
app.use(route.get('/other',ctx=>{
    ctx.response.redirect('/');
}))
app.listen(port)
console.log(`Server started at port:${port}`);

