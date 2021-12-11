import express from 'express'
import VoteController from '../controllers/vote';

const voteRouter = express.Router();

voteRouter.get('/post', VoteController.getVotePosts);
voteRouter.post('/post', VoteController.createVotePost);
voteRouter.post('/', VoteController.vote);

export default voteRouter;