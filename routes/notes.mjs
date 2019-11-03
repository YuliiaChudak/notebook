import Router from 'koa-router';

import { createNote } from '../db/repositories/notes';

const NotesRouter = new Router();

NotesRouter.post('/notes', async ctx => {
  const note = await createNote(ctx.request.body);

  console.log('NOTE', note);
  ctx.body = note;
});

export default NotesRouter;