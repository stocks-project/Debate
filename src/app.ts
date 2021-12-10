import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import voteRouter from './routes/vote';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/vote', voteRouter);
app.use((req,res,next) => {
    res.send(res.locals.resposne);
})




export default app;