import { Request, Response, NextFunction } from 'express'

const logger = (req: Request, res: Response, next: NextFunction) => {
    let param = {};
    switch(req.method) {
        case 'GET':
        case 'DELETE':
            param = req.query;
            break;    
            case 'POST':
        case 'PUT':
            param = req.body;
            break;    
            
    }
    
    console.log(`${req.ip} : ${JSON.stringify(param)}`);
    next();
}

export default logger;