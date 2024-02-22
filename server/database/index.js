import mongoose from 'mongoose';
import { user_data } from './password.js';

mongoose
	.connect(
		`mongodb+srv://Marta_node:${user_data}@cluster0.pszun3b.mongodb.net/?retryWrites=true&w=majority&dbName=mobile_store`
	)
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.log(err));
