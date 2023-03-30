import mongoose from "mongoose";
const schema = mongoose.Schema({
  name: { type: String, required: true, maxlength: 50 },
});
export default mongoose.model("User", schema);
