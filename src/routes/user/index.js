import express from "express";
import authValidation from "../../validations/user.validation.js";
import validate from "../../middleware/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middleware/authenticate.js";

const router = express.Router();
router.get("/", authenticate, controllers.getAll);
router.post("/", validate(authValidation.add), controllers.add);

export default router;
