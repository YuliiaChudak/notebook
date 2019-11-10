import Router from 'koa-router';
import {getRoles} from "../db/repositories/roles";

const RolesRouter = new Router();

RolesRouter.get('/roles', async ctx => {
  const roles = await getRoles();
  console.log('NOTE', roles);
  ctx.body = roles;
});

export default RolesRouter;
