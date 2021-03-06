"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const GeneralUtils_1 = __importDefault(require("../util/GeneralUtils"));
const extractJWT = (req, res, next) => {
    GeneralUtils_1.default.printInitiateMessage("extractJWT", "Start");
    GeneralUtils_1.default.printInitiateMessage("extractJWT", "Validating token");
    let token = req.headers.authorization?.split(' ')[1];
    if (token) {
        jsonwebtoken_1.default.verify(token, config_1.default.token.secret, (error, decoded) => {
            if (error) {
                GeneralUtils_1.default.printErrorMessage("extractJWT", "UnAuthorized!");
                GeneralUtils_1.default.printInitiateMessage("extractJWT", "End");
                return res.status(404).json({
                    message: error,
                    error
                });
            }
            else {
                GeneralUtils_1.default.printInitiateMessage("extractJWT", "Authorized");
                GeneralUtils_1.default.printInitiateMessage("extractJWT", "End");
                res.locals.jwt = decoded;
                next();
            }
        });
    }
    else {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
};
exports.default = extractJWT;
