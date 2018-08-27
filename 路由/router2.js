// koa-rout 模块对 get post 请求响应的实现

const Koa = require('koa')

const route = require('koa-route')

const fs = require('fs')

const app = new Koa()

const port = 3000

// get 请求
const httpGetHomePaheHandler = ctx => {
    ctx.response.type = 'html' //  设置响应类型
    ctx.response.body = fs.createReadStream('./index.html'); // 读取文件内容
}

async function httpPostreqHandler(ctx) {
    ctx.response.type = 'json'
    const res = await new Promise( function(resolve){
        let result = '';
        ctx.req.on('data', chunk=>{
            result+=chunk
        })
        ctx.req.on('end', ()=>{    
            resolve(result)
        })
    } )
    ctx.response.body = {
        data:`The request completed successfully. Param:${res}.`
    }    
}

app.use(route.get('/',httpGetHomePaheHandler))

app.use(route.post('/postData',httpPostreqHandler))

app.listen(port)

console.log(`Server started at port:${port}.`)
