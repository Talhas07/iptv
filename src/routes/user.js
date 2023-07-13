import express from "express";
const router = express.Router();
import user from "../models/user.js";
import jwt from "jsonwebtoken";
import { authenticate } from "../middleware/authenticate.js";
import series from "../models/series.js";
import config from "../config/index.js";
import stream from "../models/stream.js";
import mongoose, { SchemaTypeOptions } from "mongoose";

import schema from "../validations/user.js";
import { validate } from "../middleware/validate.js";
import { userController } from "../controllers/user.js";
//Register a new user verified

router.post(
  "/registration",
  validate(schema.registration),
  userController.create
);
// Login a user
router.post("/login", validate(schema.login), userController.postlogin);

router.get("/login", authenticate, userController.getlogin);

// Get all users
router.get("/", userController.getall);
//Get a user by id verified
router.get("/:id", validate(schema.id), userController.userbyid);

//Update a user by id verified
router.patch("/:id", validate(schema.update), userController.patch);

//Delete a user by id verified
router.delete("/:id", validate(schema.id), userController.delete);

//GET /users/:id/streams - Get all streams of a user by user id
router.get("/:id/streams", validate(schema.id), userController.streambyid);
//const data = await Order.find({}).populate("customer_id");

//GET /users/:id/streams/:streamId - Get a stream of a user by user id and stream id

router.get(
  "/:id/streams/:streamId",
  validate(schema.streamid),

  userController.streambytwoid
);

//Delete a stream of a user by user id and stream id

router.delete(
  "/:id/streams/:streamId",
  validate(schema.streamid),
  userController.deletebytwoid
);

export default router;
