import Joi from "joi";

const schema = {
  registration: {
    body: Joi.object().keys({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  },

  login: {
    body: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  },

  id: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },

  update: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
    body: Joi.object().keys({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  },

  streamid: {
    params: Joi.object().keys({
      id: Joi.string().required(),
      streamId: Joi.string().required(),
    }),
  },
};
export default schema;
