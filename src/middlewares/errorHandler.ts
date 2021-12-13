import CommonController from '../controllers';
import { Request, Response, NextFunction } from 'express'

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(`${req.ip.split('f:')[1]} : ${JSON.stringify(err.message)}`);
    res.status(500).send(CommonController.getResponse(500));
    return;
}

export default errorHandler