import { Request, Response, NextFunction } from 'express'


const successHandler = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.ip} : ${res.locals.response}`);
    res.send(res.locals.response);
    next();
}

export default successHandler;