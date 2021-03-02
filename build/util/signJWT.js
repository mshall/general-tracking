"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const GeneralUtils_1 = __importDefault(require("./GeneralUtils"));
const NAMESPACE = 'Auth';
const signJWT = (user, callback) => {
    var timeSinceEpoch = new Date().getTime();
    var expirationTime = timeSinceEpoch + Number(config_1.default.token.expireTime) * 100000;
    var expirationTimeInSeconds = Math.floor(expirationTime / 1000);
    GeneralUtils_1.default.printInitiateMessage("signJWT ", `Attempting to sign token for ${user.userId}`);
    try {
        jsonwebtoken_1.default.sign({
            username: user.username
        }, config_1.default.token.secret, {
            issuer: config_1.default.token.issuer,
            algorithm: 'HS256',
            expiresIn: expirationTimeInSeconds
        }, (error, token) => {
            if (error) {
                callback(error, null);
            }
            else if (token) {
                callback(null, token);
            }
        });
    }
    catch (error) {
        GeneralUtils_1.default.printErrorMessage("signJWT ", "Message: " + error.message + " | Error: \n" + error);
        callback(error, null);
    }
};
exports.default = signJWT;
