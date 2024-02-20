import express from 'express';

const app = express();

const PORT = 4334;

app.listen(PORT, () => {
	console.log(`You app loading on port ${PORT}`);
});
