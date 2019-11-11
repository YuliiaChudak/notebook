import Router from 'koa-router';
import {getPersonPhones} from "../db/repositories/phones";

const PhonesRouter = new Router();

PhonesRouter.get('/phones', async ctx => {
  const phones = await getPersonPhones();
  console.log('NOTE', phones);
  ctx.body = phones;
});

export default PhonesRouter;
