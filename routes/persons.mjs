import Router from 'koa-router';

import { getBirthdayPersons, getPersons } from '../db/repositories/persons';

const PersonsRouter = new Router();

PersonsRouter.get('/persons', async ctx => {
  const { sort_by: sortBy = null, order = 'asc', ...params } = ctx.request.query;
  let sorting = null;

  if (sortBy) {
    sorting = {
      sortBy,
      order,
    };
  }

  ctx.body = await getPersons(params, sorting);
});

PersonsRouter.get('/persons/birthday', async ctx => {
  ctx.body = await getBirthdayPersons();
});

export default PersonsRouter;
