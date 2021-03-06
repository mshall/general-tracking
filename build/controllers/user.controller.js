"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_model_1 = __importDefault(require("../database/dbmodel/user.model"));
const user_repository_1 = __importDefault(require("../repository/user.repository"));
const GeneralUtils_1 = __importDefault(require("../util/GeneralUtils"));
const signJWT_1 = __importDefault(require("../util/signJWT"));
const userRouter = express_1.Router();
exports.userRouter = userRouter;
const userRepository = new user_repository_1.default();
const NAMESPACE = "";
//-----------------------------------------
// Validate
//-----------------------------------------
userRouter.
    route('/validate')
    .get(async (request, response, next) => {
    try {
        GeneralUtils_1.default.printInitiateMessage("UserController.validate -> ", "Validate token");
        GeneralUtils_1.default.printInitiateMessage('UserController.validate', 'End');
        return response.status(200).json({
            message: 'Token(s) validated'
        });
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('UserController.findAllTrackingStreams ', 'End');
    }
});
//-----------------------------------------
// Find all users
//-----------------------------------------
userRouter.
    route('/all')
    .get(async (request, response, next) => {
    try {
        GeneralUtils_1.default.printInitiateMessage("UserController.findAll -> ", "Start");
        GeneralUtils_1.default.printInitiateMessage('UserController.findAll -> ', 'Start');
        let usersList = await userRepository.findAllUsers();
        return response.status(200).json(usersList);
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('UserController.findAllTrackingStreams ', 'End');
    }
});
//-----------------------------------------
// Add a new user
//-----------------------------------------
userRouter.
    route('/')
    .post(async (request, response, next) => {
    //const collection = getCollection('todos');
    try {
        let incomingUser = request.body.user;
        GeneralUtils_1.default.printInitiateMessage("UserController.Add -> Incoming stream", JSON.stringify(incomingUser));
        bcryptjs_1.default.hash(incomingUser.password, 10, (hashError, hash) => {
            if (hashError) {
                return response.status(401).json({
                    message: hashError.message,
                    error: hashError
                });
            }
            const user = new user_model_1.default();
            user.userId = GeneralUtils_1.default.getUUIDV4();
            user.email = incomingUser.email;
            user.username = incomingUser.username;
            user.password = hash;
            return user
                .save()
                .then((user) => {
                return response.status(201).json({
                    user
                });
            })
                .catch((error) => {
                return response.status(500).json({
                    message: error.message,
                    error
                });
            });
        });
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('UserController.AddNewUser', 'End');
        next(error);
    }
});
//-----------------------------------------
// Login
//-----------------------------------------
userRouter.
    route('/login')
    .post(async (request, response, next) => {
    try {
        GeneralUtils_1.default.printInitiateMessage("UserController.login -> ", "Validate token");
        //------------
        let { email, password } = request.body.user;
        GeneralUtils_1.default.printInitiateMessage("UserController.login", "Incoming: " + JSON.stringify(request.body.user));
        GeneralUtils_1.default.printInitiateMessage("UserController.login", "Incoming: Email: " + email + " | Password: " + password);
        await userRepository.findUserByEmail(email)
            .then((fetchedUser) => {
            GeneralUtils_1.default.printInitiateMessage("UserController.login", "Fetched User: " + JSON.stringify(fetchedUser));
            if (fetchedUser == null || !fetchedUser) {
                GeneralUtils_1.default.printErrorMessage("UserController.login", "Invalid user!");
                return response.status(401).json({
                    message: 'Unauthorized'
                });
            }
            bcryptjs_1.default.compare(password, fetchedUser.password, (error, result) => {
                if (error) {
                    return response.status(401).json({
                        message: 'Password Mismatch'
                    });
                }
                else if (result) {
                    signJWT_1.default(fetchedUser, (_error, token) => {
                        if (_error) {
                            return response.status(500).json({
                                message: _error.message,
                                error: _error
                            });
                        }
                        else if (token) {
                            return response.status(200).json({
                                message: 'Auth successful',
                                token: token,
                                user: fetchedUser
                            });
                        }
                    });
                }
            });
        }).catch((err) => {
            console.log(err);
            response.status(500).json({
                error: err
            });
        });
        //----------------
        GeneralUtils_1.default.printInitiateMessage('UserController.login', 'End');
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('UserController.login ', 'End');
    }
});
