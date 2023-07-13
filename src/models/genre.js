import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: { type: String },
});
{
  timestamps: true;
}
const genre = mongoose.model("genre", schema);

export default genre;
