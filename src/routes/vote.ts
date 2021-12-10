import express from 'express'
import VoteController from '../controllers/vote';

const voteRouter = express.Router();

voteRouter.get('/', VoteController.getVotePosts);
voteRouter.post('/', VoteController.vote);

export default voteRouter;