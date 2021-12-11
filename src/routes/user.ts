import express from 'express'
import UserController from '../controllers/user';

const userRouter = express.Router();

userRouter.post('/name', UserController.setName);

export default userRouter;