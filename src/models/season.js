import mongoose from "mongoose";

const schema = mongoose.Schema({
  season_id: { type: mongoose.Schema.Types.ObjectId, ref: "series" },
  name: { type: String },
  description: { type: String },
});
{
  timestamps: true;
}
const season = mongoose.model("season", schema);

export default season;
