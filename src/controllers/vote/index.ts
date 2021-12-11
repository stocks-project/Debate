import { Response, Request, NextFunction } from 'express'
import VoteMethods from '../../services/vote';
import CommonController from '../index';

class VoteController extends CommonController {
    public static async vote(req: Request, res: Response, next: NextFunction){
        try {
            console.log('ip:', req.ip.split('f:')[1]);
            const result = await VoteMethods.vote(req.body, req.ip.split('f:')[1]);
            res.locals.response = super.getResponse(result ? 200 : 400)
            next();
        } catch {
            res.locals.response = { status: 500, msg: 'Check Parameter' }
        }
    }
    public static async getVotePosts (req: Request, res: Response, next: NextFunction) {
        try {
            res.locals.response = await VoteMethods.getVotePosts(req.query);
        } catch (e) {
            next(e);
        }
        next();
    }

    public static async getVotePostDetail (req: Request, res: Response, next: NextFunction) {
        try {
            res.locals.response = await VoteMethods.getVotePostDetail(req.query);
        } catch (e) {
            next(e);
        }
        next();
    }

    public static async createVotePost (req: Request, res: Response, next: NextFunction) {
        try {
            const result = await VoteMethods.createVotePost(req.body, req.ip.split('f:')[1]);
            res.locals.response = result ? super.getResponse(200) : super.getResponse(400);
        } catch (e) {
            next(e);
        }
        next();
    }
}

export default VoteController;