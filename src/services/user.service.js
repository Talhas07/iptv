import { UserModel } from "../models/index.js";

export const UserService = {
	getAll: async () => {
		return UserModel.find();
	},

	add: async (body) => {
		return UserModel.create(body);
	},
};
