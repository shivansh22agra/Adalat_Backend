import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
	
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	// roles: {
	// 	type: [String],
	// 	enum: ["lawyer", "user", "judge"],
	// 	default: ["user"],
	// },
});

const User = mongoose.model("User", userSchema);

export default User;