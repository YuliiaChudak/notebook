import Twilio from 'twilio';
import config from '../config';

export default new Twilio(config.twilio.sid, config.twilio.token);
