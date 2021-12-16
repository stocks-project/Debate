import { Response, Request, NextFunction } from 'express';
import VoteMethods from '../../services/vote';
import { getIp } from '../../utils/ip';
import CommonController from '../index';

class VoteController extends CommonController {
    public static async vote(req: Request, res: Response, next: NextFunction){
        try {
            console.log('ip:', getIp(req.ip));
            res.locals.response = await VoteMethods.vote(req.body, getIp(req.ip))
            next();
        } catch (e) {
            next(e);
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
            res.locals.response = await VoteMethods.getVotePostDetail(req.query, getIp(req.ip));
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

    public static async getVoteComment (req: Request, res: Response, next: NextFunction) {
        try {
            const result = await VoteMethods.getVoteComment(req.body);
            res.locals.response = result ? super.getResponse(200) : super.getResponse(400);
        } catch (e) {
            next(e);
        }
        next();
    }

    public static async createVoteComment (req: Request, res: Response, next: NextFunction) {
        try {
            const result = await VoteMethods.createVoteComment(req.body, req.ip.split('f:')[1]);
            res.locals.response = result ? super.getResponse(200) : super.getResponse(400);
        } catch (e) {
            next(e);
        }
        next();
    }
}

export default VoteController;