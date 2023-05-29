require('dotenv').config();

const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = "Hello, World from Router"
});

app.use(router.routes())

app.listen(process.env.APP_PORT, function(){
  console.log('Server running on https://localhost:' + process.env.APP_PORT)
});