import express from "express";
const router = express.Router();
import season from "../models/season.js";
import episode from "../models/episode.js";
import schema from "../validations/season.js";
import { validate } from "../middleware/validate.js";
import { seasonController } from "../controllers/season.js";

// POST /seasons - Create a new season
router.post("/", validate(schema.create), seasonController.create);
// GET /seasons - Get all seasons
router.get("/", seasonController.getall);

// GET /seasons/:id - Get a season by id
router.get("/:id", validate(schema.id), seasonController.getbyid);
// GET /seasons/:id/episodes - Get all episodes of a season by season id
router.get("/:id/episodes", validate(schema.id), seasonController.episodebyid);

// PATCH /seasons/:id - Update a season by id
router.patch("/:id", validate(schema.update), seasonController.patch);

// DELETE /seasons/:id - Delete a season by id

router.delete("/:id", validate(schema.id), seasonController.delete);

export default router;
