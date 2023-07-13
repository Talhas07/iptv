import Joi from "joi";

export const schema = {
  create: {
    body: Joi.object().keys({
      episode_id: Joi.string().required(),
      user_id: Joi.string().required(),
      time: Joi.string().required(),
    }),
  },

  id: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },

  update: {
    body: Joi.object().keys({
      episode_id: Joi.string().required(),
      user_id: Joi.string().required(),
      time: Joi.string().required(),
    }),
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },
};
// export default schema;
