import Joi from '@hapi/joi';

const personSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  patronymic: Joi.any().optional(),
  birthday: Joi.string().required(),
  occupation: Joi.string().required(),
  is_deleted: Joi.boolean().optional(),
  is_studying: Joi.boolean().optional(),
  role_id: Joi.number().integer().required(),
});

export default personSchema;
