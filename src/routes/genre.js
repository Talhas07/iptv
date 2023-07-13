import express from "express";
const router = express.Router();
import user from "../models/user.js";
import jwt from "jsonwebtoken";
import series from "../models/series.js";
import genre_series from "../models/genre_series.js";
import genre from "../models/genre.js";
import schema from "../validations/genre.js";
import { validate } from "../middleware/validate.js";
import { genreController } from "../controllers/genre.js";

//- Create a new genre
router.post("/", validate(schema.create), genreController.create);

// GET /genres - Get all genres
router.get("/", genreController.getall);

//  Get a genre by id
router.get("/:id", validate(schema.id), genreController.getbyid);

//  Get all series of a genre by genre id
router.get("/:id/series", validate(schema.id), genreController.seriesbyid);
//GET /genres/:id/series/seasons - Get all seasons of all series of a genre by genre id

router.get(
  "/:id/series/seasons",
  validate(schema.id),
  genreController.seasonbyid
);

// Update a genre by id
router.patch("/:id", validate(schema.update), genreController.patch);

// Delete a genre by id
router.delete("/:id", validate(schema.id), genreController.delete);

export default router;
