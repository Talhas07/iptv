import express from "express";
const router = express.Router();
import schema from "../validations/episode.js";
import { validate } from "../middleware/validate.js";
import { episodeController } from "../controllers/episode.js";
// Episodes

//create a new series
router.post("/", validate(schema.create), episodeController.create);

//get all series
router.get("/", episodeController.getall);

// GET /episodes/:id - Get an episode by id
router.get("/:id", validate(schema.id), episodeController.episodebyid);

// GET /episodes/:id/streams - Get all streams of an episode by episode id

router.get("/:id/streams", validate(schema.id), episodeController.streamsbyid);
// PATCH /episodes/:id - Update an episode by id
router.patch("/:id", validate(schema.update), episodeController.patch);

// DELETE /episodes/:id - Delete an episode by id
router.delete("/:id", validate(schema.id), episodeController.delete);
export default router;
