import mongoose from "mongoose";

const schema = mongoose.Schema({
  trailer_id: { type: mongoose.Schema.Types.ObjectId, ref: "file" },
  name: { type: String },
  discription: { type: String },
  thumbnail_id: { type: mongoose.Schema.Types.ObjectId, ref: "file" },
});

{
  timestamps: true;
}
const series = mongoose.model("series", schema);

export default series;
