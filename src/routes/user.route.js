import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { UserController } from "../controllers/index.js";

const router = express.Router();
router.get("/", authenticate, UserController.getAll);
router.post("/", validate(UserValidationSchema.add), UserController.add);

export default router;
