import express from "express";

// routes
import userRoute from "./user.route.js";

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes

// Un-Protected Routes
unProtectedRouter.use("/user", userRoute);

export { protectedRouter, unProtectedRouter };
