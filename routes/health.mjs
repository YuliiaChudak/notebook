import Router from 'koa-router';

const HealthRouter = new Router();

HealthRouter.get('/health', async ctx => {
  ctx.body = { status: 'ok', at: new Date().toISOString() };
  ctx.status = 200;
});

export default HealthRouter;
