import Router from 'koa-router';
import { getLocationByPersonId } from "../db/repositories/locations";

const LocationsRouter = new Router();

LocationsRouter.get('/locations/:id', async ctx => {
    const { id } = ctx.params;

    ctx.body = await getLocationByPersonId(id);
});

export default LocationsRouter;
