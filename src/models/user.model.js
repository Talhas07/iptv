import mongoose from "mongoose";
const schema = mongoose.Schema(
	{
		name: { type: String, required: true, maxlength: 50 },
	},
	{ timestamps: true }
);
export const UserModel = mongoose.model("User", schema);
