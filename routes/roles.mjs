import Router from 'koa-router';
import { getRoles } from '../db/repositories/roles';

const RolesRouter = new Router();

RolesRouter.get('/roles', async ctx => {
  ctx.body = await getRoles();
});

export default RolesRouter;
