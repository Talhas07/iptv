import mongoose from "mongoose";

// Here 👇 it is, the schema
const schema = mongoose.Schema({
  original_name: { type: String },
  current_name: { type: String },
  type: { type: String },
  path: { type: String },
  size: { type: String },
});
{
  timestamps: true;
}
const file = mongoose.model("file", schema);

export default file;
