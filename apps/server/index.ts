import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const { PORT } = process.env;

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
	res.send('<h1>Express + TypeScript Server</h1>');
});

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});