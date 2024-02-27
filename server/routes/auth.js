import { Router } from 'express';
import User from '../database/schemas/User.js';
import { hashPassword, comparePassword } from '../utils/utils.js';

const router = Router();

router.post('/login', async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) res.send(400);

	const userDB = await User.findOne({ email });
	if (!userDB) res.send(401);

	const isValid = comparePassword(password, userDB.password);
	if (isValid) {
		req.session.user = { email };
		res.status(200).json('You are logged in');
	} else {
		res.status(401).json('Wrong email os password');
	}
});

router.post('/register', async (req, res) => {
	const { email } = req.body;
	const userDB = await User.findOne({ email });

	if (userDB) {
		res.status(400).send({ message: 'User already exists' });
	} else {
		const hashedPassword = hashPassword(req.body.password);
		await User.create({ email, password: hashedPassword });
		res.status(201).send({ message: 'User created' });
	}
});

export default router;
