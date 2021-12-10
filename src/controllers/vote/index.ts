import { Response, Request, NextFunction } from 'express'
import VoteMethods from '../../services/vote';
import CommonController from '../index';

class VoteController extends CommonController {
    public static async vote(req: Request, res: Response, next: NextFunction){
        try {
            console.log('ip:', req.ip);
            const result = await VoteMethods.vote(req.body, req.ip);
            res.locals.response = super.getResponse(result ? 200 : 400)
            next();
        } catch {
            res.locals.response = { status: 500, msg: 'Check Parameter' }
        }
    }
    public static async getVotePosts (req: Request, res: Response, next: NextFunction) {
        try {
            res.locals.response = await VoteMethods.getVotePosts(req.body);
        } catch (e) {
            next(e);
        }
        next();
    }
}

export default VoteController;