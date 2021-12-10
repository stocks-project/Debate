import CommonController from '../controllers';
import { Request, Response, NextFunction } from 'express'

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(`${req.ip} : ${JSON.stringify(err.message)}`);
    res.send(CommonController.getResponse(500));
    return;
}

export default errorHandler