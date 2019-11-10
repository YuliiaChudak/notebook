import Twilio from 'twilio';
import config from '../config';

export default new Twilio(config.twilio.sid, config.twilio.token);
//
// .messages.create({
//     body: 'Congratulation from Yuliia',
//     to: '+380962005850',
//     from: '+12015373276'
// })
//     .then((message) => console.log(message.sid));