import Koa from 'koa';
import cors from '@koa/cors';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

import config from './config';
import NotesRouter from './routes/notes';

const app = new Koa();
const appRouter = new Router();

// appRouter.get('/', (ctx) => {
//   ctx.body = 'hello'
// });

appRouter.use('/api', NotesRouter.routes(), NotesRouter.allowedMethods());

app.use(cors());
app.use(bodyParser());
app.use(appRouter.allowedMethods());
app.use(appRouter.routes());
app.listen(config.port);
console.log(config.db);
