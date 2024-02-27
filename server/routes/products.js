import { Router } from 'express';
import { mobilesList } from '../data/mobilesList.js';

const router = Router();

router.use((req, res, next) => {
	if (req.session.user) next();
	else res.status(401).json({ message: 'Unathorized' });
});

router.get('/', (req, res) => {
	res.json(mobilesList);
});

export default router;
