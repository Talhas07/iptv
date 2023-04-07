import Joi from "joi";

export const userValidationSchema = {
	add: {
		body: Joi.object().keys({
			name: Joi.string().required(),
		}),
	},
};
