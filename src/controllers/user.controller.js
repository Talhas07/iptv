import { UserService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const UserController = {
	getAll: async (req, res) => {
		try {
			const data = await UserService.getAll();
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	add: async (req, res) => {
		try {
			const data = await UserService.add(req.body);
			return httpResponse.CREATED(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
};
