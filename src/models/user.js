import mongoose from "mongoose";

const schema = mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String },
  password: { type: String },
});

{
  timestamps: true;
}
const user = mongoose.model("user", schema);
export default user;
