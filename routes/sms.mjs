import Router from 'koa-router';
import twilio from '../twilio';
import config from '../config';
import { getPhoneById } from "../db/repositories/phones";
import NotFound from '../errors/NotFound'

const SMSRouter = new Router();

SMSRouter.post('/send', async ctx => {
    const { id, message } = ctx.request.body;
    const receiver = await getPhoneById(id);

    if (!receiver) {
        throw new NotFound('Phone number');
    }

    await twilio.messages.create({
        body: message,
        to: receiver.phone,
        from: config.twilio.sender,
    });
    ctx.status = 200;
});

export default SMSRouter;
