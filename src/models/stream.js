import mongoose from "mongoose";

const schema = mongoose.Schema({
  episode_id: { type: mongoose.Schema.Types.ObjectId, ref: "episode" },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  time: { type: String },
});
{
  timestamps: true;
}

const stream = mongoose.model("stream", schema);
export default stream;
