import express from "express";
const router = express.Router();
import { schema } from "../validations/stream.js";
import { validate } from "../middleware/validate.js";
import { streamController } from "../controllers/stream.js";
// POST /streams - Create a new stream

router.post("/", validate(schema.create), streamController.create);
// GET /streams - Get all streams
router.get("/", streamController.getall);

// GET /streams/:id - Get a stream by id
router.get("/:id", validate(schema.id), streamController.streambyid);

//:id/episode- get the episodes of a stream by stream id

router.get("/:id/episodes", validate(schema.id), streamController.episodebyid);
// GET /streams/:id/user - Get the user of a stream by stream id
router.get("/:id/user", validate(schema.id), streamController.userbyid);

// GET /streams/:id/episode/season - Get the season of an episode of a stream by stream id
router.get(
  "/:id/episode/season",
  validate(schema.id),
  streamController.seasonbyid
);

// GET /streams/:id/episode/season/series - Get the series of a season of an episode of a stream by stream id
router.get(
  "/:id/episode/season/series",
  validate(schema.id),
  streamController.seriesbyid
);
// GET /streams/:id/episode/season/series/genre - Get the genre of a series of a season of an episode of a stream by stream id

router.get(
  "/:id/episode/season/series/genre",
  validate(schema.id),
  streamController.genrebyid
);
// PATCH /streams/:id - Update a stream by id

router.patch(
  "/:id",
  validate(schema.update),

  streamController.patch
);
// DELETE /streams/:id - Delete a stream by id

router.delete("/:id", validate(schema.id), streamController.delete);

export default router;
