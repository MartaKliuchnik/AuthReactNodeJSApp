import express from 'express';
import session from 'express-session';
import authRouter from './routes/auth.js';
import productsRouter from './routes/products.js';
import './database/index.js';
import cors from 'cors';

const app = express();

const PORT = 4334;

app.use(
	cors({
		origin: '*',
	})
);
app.use(express.json());
app.use(
	session({
		secret: 'dfgbvceDF',
		resave: false,
		saveUninitialized: false,
	})
);
app.use('/auth', authRouter);
app.use('/products', productsRouter);

app.listen(PORT, () => {
	console.log(`You app loading on port ${PORT}`);
});
