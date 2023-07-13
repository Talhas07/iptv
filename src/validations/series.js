import Joi from "joi";

const schema = {
  create: {
    body: Joi.object().keys({
      trailer_id: Joi.string().required(),
      name: Joi.string().required(),
      description: Joi.string().required(),
      thumbnail_id: Joi.string().required(),
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
      trailer_id: Joi.string().required(),
      name: Joi.string().required(),
      description: Joi.string().required(),
      thumbnail_id: Joi.string().required(),
    }),
  },
};
export default schema;
