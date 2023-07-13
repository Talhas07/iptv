import express from "express";
// routes
import userRoute from "./user.js";
import seriesRoute from "./series.js";
import episodeRoute from "./episode.js";
import genreRoute from "./genre.js";
import seasonRoute from "./season.js";
import streamRoute from "./stream.js";

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();
// Protected Routes
// Un-Protected Routes
unProtectedRouter.use("/series", seriesRoute);
unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/genres", genreRoute);
unProtectedRouter.use("/episodes", episodeRoute);
unProtectedRouter.use("/seasons", seasonRoute);
unProtectedRouter.use("/streams", streamRoute);

export { protectedRouter, unProtectedRouter };
