import Joi from "joi";
const schema = {
  create: {
    body: Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string().required(),
      thumbnail_id: Joi.string().required(),
      season_id: Joi.string().required(),
    }),
  },

  id: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },

  update: {
    body: Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string().required(),
      thumbnail_id: Joi.string().required(),
      season_id: Joi.string().required(),
    }),
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },
};
export default schema;
