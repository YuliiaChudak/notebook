import Router from 'koa-router';
import { getPhoneById } from '../db/repositories/phones';

const PhonesRouter = new Router();

PhonesRouter.get('/phones/:id', async ctx => {
  const { id } = ctx.params;

  ctx.body = await getPhoneById(id);
});

export default PhonesRouter;
