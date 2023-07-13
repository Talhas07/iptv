import { userService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/index.js";
export const userController = {
  //create
  create: async (req, res) => {
    try {
      console.log(req.body);

      var body = req.body;

      bcrypt.hash(req.body.password, 10, async function (err, hash) {
        if (err) {
          console.log(err);
        } else {
          var pass = hash;
          console.log(pass);
          body.password = pass;
          const users = await userService.create(body);
          // res.status(200).json(users);
          let message = "user created successfully";
          return httpResponse.CREATED(res, users, message);
        }
      });
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  //postlogin
  postlogin: async (req, res) => {
    const body = req.body;
    let pass = "";
    bcrypt.hash(req.body.password, 10);
    console.log(pass);
    const users = await userService.postlogin(body);

    console.log(req.body);
    console.log(req.body.password);
    console.log(users.password);
    console.log(users);
    if (users) {
      bcrypt.compare(req.body.password, users.password, (err, match) => {
        if (err) {
          console.error("Error comparing passwords:", err);
          return;
        }
        if (match) {
          console.log("Passwords match");
          try {
            const payload = {
              userId: "email",
              username: "password",
              admin: true,
            };
            const token = jwt.sign(payload, config.env.jwtSecret);
            res.json({ token });
          } catch ({ message }) {
            res.json({ message });
          }
        } else {
          console.log("Passwords do not match");
        }
      });
    }
  },
  //getlogin
  getlogin: (req, res) => {
    res.json({ message: "Welcome to the API" });
  },
  //getall
  getall: async (req, res) => {
    try {
      const users = await userService.get(req.query);
      return httpResponse.SUCCESS(res, users);
    } catch ({ message }) {
      res.json({ message });
    }
  },
  //userbyid
  userbyid: async (req, res) => {
    try {
      const users = await userService.getById(req.params.id);
      let message = "users fetched successfully";
      return httpResponse.SUCCESS(res, users, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //patch
  patch: async (req, res) => {
    try {
      const users = await userService.update(req.params.id, req.body);

      let message = "user updated successfully";
      return httpResponse.SUCCESS(res, users, message);
    } catch (error) {
      console.log(error);
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //delete
  delete: async (req, res) => {
    try {
      const users = await userService.delete(req.params.id);
      let message = "user deleted successfully";
      return httpResponse.SUCCESS(res, message);
    } catch (error) {
      console.log(error);
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //streambyid
  streambyid: async (req, res) => {
    try {
      // const new2 = await stream.find();
      // res.json(new2);

      // const new3 = user.findById(req.params.id);
      // res.json(new3);
      const result = await userService.streambyid(req.params.id);
      let message = "data fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //streambytwoid
  streambytwoid: async (req, res) => {
    try {
      const result = await userService.streambytwoid(
        req.params.id,
        req.params.streamId
      );
      console.log(req.params.id, req.params.streamid);
      let message = "data fetched successfully";
      return httpResponse.SUCCESS(res, result, message);
    } catch (error) {
      console.log(error);
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  //deletebytwoid
  deletebytwoid: async (req, res) => {
    try {
      const result = await userService.deletebytwoid(
        req.params.id,
        req.params.streamId
      );
      let message = "deleted successfully";
      return httpResponse.SUCCESS(res, message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
};
