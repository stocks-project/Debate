import app from '../app';
import VoteController from '../controllers/vote';

const voteRouter = app;

voteRouter.get('/', VoteController.getVotes);
voteRouter.post('/', VoteController.vote);

export default voteRouter;