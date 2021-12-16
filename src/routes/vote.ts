import express from 'express'
import VoteController from '../controllers/vote';

const voteRouter = express.Router();

voteRouter.get('/post', VoteController.getVotePosts);
voteRouter.get('/post/detail', VoteController.getVotePostDetail);
voteRouter.post('/post', VoteController.createVotePost);

voteRouter.get('/post/comment', VoteController.getVoteComment);
voteRouter.post('/post/comment', VoteController.createVoteComment);

voteRouter.post('/', VoteController.vote);

export default voteRouter;