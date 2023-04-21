import express from "express";
import { userValidationSchema } from "../validations/index.js";
import { validate } from "../middleware/index.js";
import { UserController } from "../controllers/index.js";
import { authenticate } from "../middleware/index.js";

const router = express.Router();
router.get("/", authenticate, UserController.getAll);
router.post("/", validate(userValidationSchema.add), UserController.add);

export default router;
