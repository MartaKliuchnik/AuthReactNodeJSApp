import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		require: true,
		unique: true,
	},
	password: {
		type: String,
		require: true,
		qnique: true,
	},
	date: {
		type: Date,
		default: Date.now(),
	},
});

const User = mongoose.model('users', UserSchema);

export default User;
