import UserModel from "../models/user.model.js";

const UserService = {
  getAll: async () => {
      return UserModel.find();
  },

  add: async (body) => {
      return UserModel.create(body);
  },
};

export default UserService;
