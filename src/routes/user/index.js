import express from "express";
import { userValidationSchema } from "../../validations/index.js";
import { validate } from "../../middleware/index.js";
import controller from "./controller.js";
import { authenticate } from "../../middleware/index.js";

const router = express.Router();
router.get("/", authenticate, controller.getAll);
router.post("/", validate(userValidationSchema.add), controller.add);

export default router;
