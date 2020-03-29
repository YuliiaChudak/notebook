import Router from 'koa-router';

import { createNote, deleteNote, getNoteByPersonId, updateNote } from '../db/repositories/notes';

const NotesRouter = new Router();

NotesRouter.get('/notes/:id', async ctx => {
  const { id } = ctx.params;

  ctx.body = await getNoteByPersonId(id);
});

NotesRouter.post('/notes', async ctx => {
  ctx.body = await createNote(ctx.request.body);
});

NotesRouter.delete('/notes/:id', async ctx => {
  const { id } = ctx.params;

  ctx.body = await deleteNote(id);
});

NotesRouter.put('/notes/:id', async ctx => {
  const { id } = ctx.params;
  const params = ctx.request.body;

  ctx.body = await updateNote(id, params);
});

export default NotesRouter;
