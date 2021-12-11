import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import voteRouter from './routes/vote';
import successHandler from './middlewares/successHandler';
import logger from './middlewares/logger';
import errorHandler from './middlewares/errorHandler';
import userRouter from './routes/user';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(cors());
app.use('/vote', voteRouter);
app.use('/user', userRouter);
app.use(errorHandler);
app.use(successHandler);

export default app;