import Joi from "joi";

export const UserValidationSchema = {
	add: {
		body: Joi.object().keys({
			name: Joi.string().required(),
		}),
	},
};
