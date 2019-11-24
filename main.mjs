import Koa from 'koa';
import cors from '@koa/cors';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

import config from './config';
import NotesRouter from './routes/notes';
import PhonesRouter from "./routes/phones";
import RolesRouter from "./routes/roles";
import LocationsRouter from "./routes/locations";
import PersonsRouter from "./routes/persons";
import SMSRouter from "./routes/sms";

const app = new Koa();
const appRouter = new Router();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
  }
});

appRouter.use('/api', NotesRouter.routes(), NotesRouter.allowedMethods());
appRouter.use('/api', RolesRouter.routes(), RolesRouter.allowedMethods());
appRouter.use('/api', PhonesRouter.routes(), PhonesRouter.allowedMethods());
appRouter.use('/api', LocationsRouter.routes(), LocationsRouter.allowedMethods());
appRouter.use('/api', PersonsRouter.routes(), PersonsRouter.allowedMethods());
appRouter.use('/sms', SMSRouter.routes(), SMSRouter.allowedMethods());

app.use(cors());
app.use(bodyParser());
app.use(appRouter.allowedMethods());
app.use(appRouter.routes());
app.listen(config.port);
