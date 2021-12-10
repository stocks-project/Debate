import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import voteRouter from './routes/vote';

const app = express();

// set security HTTP headers
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(voteRouter);



export default app;