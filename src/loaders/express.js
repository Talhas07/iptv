import express from "express";
import cors from "cors";
import helmet from "helmet";
import { authenticate } from "../middleware/index.js";
import { protectedRouter, unProtectedRouter } from "../routes/index.js";

export default async function expressLoader({ app }) {
  app.use(cors());
  app.use(helmet());

  app.use(express.json());
  app.use(express.urlencoded());

  app.use("/", unProtectedRouter);
  app.use("/", authenticate, protectedRouter);
}
