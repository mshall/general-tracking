import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import appConfig from '../config';
import GeneralUtils from '../util/GeneralUtils';

const extractJWT = (req: Request, res: Response, next: NextFunction) => {
    GeneralUtils.printInitiateMessage("extractJWT", "Start");
    GeneralUtils.printInitiateMessage("extractJWT", "Validating token");

    let token = req.headers.authorization?.split(' ')[1];

    if (token) {
        jwt.verify(token, appConfig.token.secret, (error, decoded) => {
            if (error) {
                GeneralUtils.printErrorMessage("extractJWT", "UnAuthorized!");
                GeneralUtils.printInitiateMessage("extractJWT", "End");
                return res.status(404).json({
                    message: error,
                    error
                });
            } else {
                GeneralUtils.printInitiateMessage("extractJWT", "Authorized");
                GeneralUtils.printInitiateMessage("extractJWT", "End");
                res.locals.jwt = decoded;
                next();
            }
        });
    } else {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
};

export default extractJWT;