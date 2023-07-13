import mongoose from "mongoose";

const schema = mongoose.Schema({
  genre_id: { type: mongoose.Schema.Types.ObjectId, ref: "genre" },
  series_id: { type: mongoose.Schema.Types.ObjectId, ref: "series" },
});
{
  timestamps: true;
}
const genre_series = mongoose.model("genre_series", schema);

export default genre_series;
