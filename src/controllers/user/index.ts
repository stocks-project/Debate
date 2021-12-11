import { Response, Request, NextFunction } from 'express'
import CommonController from '..';
import UserMethods from '../../services/user';

class UserController extends CommonController {
    public static async setName(req: Request, res: Response, next: NextFunction){
        try {
            console.log('ip:', req.ip.split('f:')[1]);
            const result = await UserMethods.setName(req.body, req.ip.split('f:')[1]);
            res.locals.response = super.getResponse(result ? 200 : 400)
            next();
        } catch {
            res.locals.response = { status: 500, msg: 'Check Parameter' }
        }
    }
}

export default UserController;