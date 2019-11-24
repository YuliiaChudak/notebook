import Joi from '@hapi/joi';

const personSchema = Joi.object({
  first_name: Joi.string()
    .alphanum()
    .required(),

  last_name: Joi.string()
    .alphanum()
    .required(),

  patronymic: Joi.string()
    .alphanum(),

  birthday: Joi.string()
    .required(),

  occupation: Joi.string()
    .alphanum()
    .required(),

  is_deleted: Joi.boolean(),

  is_studying: Joi.boolean(),
  
  role_id: Joi.number()
    .integer()
    .required(),
});

export default personSchema;
