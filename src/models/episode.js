import mongoose from "mongoose";

const schema = mongoose.Schema({
  season_id: { type: mongoose.Schema.Types.ObjectId, ref: "season" },
  name: { type: String },
  description: { type: String },
  thumbnail_id: { type: mongoose.Schema.Types.ObjectId, ref: "file" },
});
{
  timestamps: true;
}
const episode = mongoose.model("episode", schema);

export default episode;
