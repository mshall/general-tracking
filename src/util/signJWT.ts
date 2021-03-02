import jwt from 'jsonwebtoken';
import appConfig from '../config';
import User from '../database/dbmodel/user.model';
import GeneralUtils from './GeneralUtils';

const NAMESPACE = 'Auth';

const signJWT = (user: User, callback: (error: Error | null, token: string | null) => void): void => {
    var timeSinceEpoch = new Date().getTime();
    var expirationTime = timeSinceEpoch + Number(appConfig.token.expireTime) * 100000;
    var expirationTimeInSeconds = Math.floor(expirationTime / 1000);

    GeneralUtils.printInitiateMessage("signJWT ", `Attempting to sign token for ${user.userId}`);

    try {
        jwt.sign(
            {
                username: user.username
            },
            appConfig.token.secret,
            {
                issuer: appConfig.token.issuer,
                algorithm: 'HS256',
                expiresIn: expirationTimeInSeconds
            },
            (error, token) => {
                if (error) {
                    callback(error, null);
                } else if (token) {
                    callback(null, token);
                }
            }
        );
    } catch (error) {
        GeneralUtils.printErrorMessage("signJWT ", "Message: " + error.message + " | Error: \n" + error);
        callback(error, null);
    }
};

export default signJWT;