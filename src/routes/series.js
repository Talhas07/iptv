// all done plus methods working
import express from "express";
const router = express.Router();
import jwt from "jsonwebtoken";
import schema from "../validations/series.js";
import { validate } from "../middleware/validate.js";
import { seriesController } from "../controllers/series.js";
//create a new series
router.post("/", validate(schema.create), seriesController.create);
//get all series
router.get("/", seriesController.getall);

//get a series by id
router.get("/:id", validate(schema.id), seriesController.seriesbyid);

//99% confirm/ Get all seasons of a series by series id

// router.get("/:id/seasons",validate(schema.id.params) async (req, res) => {
//   try {
//     const result = await season.find({ season_id: +req.params.id });
//     res.json(result);
//   } catch {
//     message;
//   }
//   {
//     res.json(message);
//   }
// });

// GET /series/:id/seasons - Get all seasons of a series by series id
router.get("/:id/seasons", validate(schema.id), seriesController.seasonsbyid);
//GET /series/:id/seasons/episodes - Get all episodes of a series by series id

router.get(
  "/:id/seasons/episodes",
  validate(schema.id),
  seriesController.episodebyid
);

// PATCH /series/:id - Update a series by id

router.patch("/:id", validate(schema.update), seriesController.patch);
// DELETE /series/:id - Delete a series by id
router.delete("/:id", validate(schema.id), seriesController.delete);

export default router;
