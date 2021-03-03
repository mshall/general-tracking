import * as express from 'express';
import { Router } from 'express';
import GeneralUtils from "../util/GeneralUtils";
import TreackingStreamRepository from '../database/repository/tracking-stream.repository';
import UserRepository from '../database/repository/user.repository';
import bcryptjs from 'bcryptjs';
import User from '../database/dbmodel/user.model';
import signJWT from '../util/signJWT';

const userRouter = Router();
const userRepository: UserRepository = new UserRepository();
const NAMESPACE = "";
//-----------------------------------------
// Validate
//-----------------------------------------
userRouter.
  route('/validate')
  .get(async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction) => {
    try {
      GeneralUtils.printInitiateMessage(
        "UserController.validate -> ", "Validate token");
      GeneralUtils.printInitiateMessage(
        'UserController.validate', 'End',
      );
      return response.status(200).json({
        message: 'Token(s) validated'
      });
    } catch (error) {
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'UserController.findAllTrackingStreams ', 'End',
      );
    }

  });

  //-----------------------------------------
// Find all users
//-----------------------------------------
userRouter.
route('/all')
.get(async (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction) => {
  try {
    GeneralUtils.printInitiateMessage(
      "UserController.findAll -> ", "Start");
    GeneralUtils.printInitiateMessage(
      'UserController.findAll -> ', 'Start',
    );
    let usersList = await userRepository.findAllUsers();
    return response.status(200).json(usersList);
  } catch (error) {
    console.error(error);
    GeneralUtils.printInitiateMessage(
      'UserController.findAllTrackingStreams ', 'End',
    );
  }

});

//-----------------------------------------
// Add a new user
//-----------------------------------------
userRouter.
  route('/')
  .post(async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction) => {
    //const collection = getCollection('todos');
    try {
      let incomingUser = request.body.user;

      GeneralUtils.printInitiateMessage(
        "UserController.Add -> Incoming stream",
        JSON.stringify(incomingUser));

      bcryptjs.hash(incomingUser.password, 10, (hashError, hash) => {
        if (hashError) {
          return response.status(401).json({
            message: hashError.message,
            error: hashError
          });
        }

        const user = new User();
        user.userId = GeneralUtils.getUUIDV4();
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

    } catch (error) {
      console.error(error);
      GeneralUtils.printInitiateMessage('UserController.AddNewUser', 'End');
      next(error);
    }

  });

//-----------------------------------------
// Login
//-----------------------------------------
userRouter.
  route('/login')
  .post(async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction) => {
    try {
      GeneralUtils.printInitiateMessage(
        "UserController.login -> ", "Validate token");
      //------------
      let { email, password } = request.body.user;
      GeneralUtils.printInitiateMessage("UserController.login", "Incoming: " + JSON.stringify(request.body.user));
      GeneralUtils.printInitiateMessage("UserController.login", "Incoming: Email: " + email + " | Password: " + password);
      await userRepository.findUserByEmail(email)
        .then((fetchedUser) => {
          GeneralUtils.printInitiateMessage("UserController.login", "Fetched User: " + JSON.stringify(fetchedUser));
          if (fetchedUser == null || !fetchedUser) {
            GeneralUtils.printErrorMessage("UserController.login", "Invalid user!");
            return response.status(401).json({
              message: 'Unauthorized'
            });
          }

          bcryptjs.compare(password, fetchedUser.password, (error, result) => {
            if (error) {
              return response.status(401).json({
                message: 'Password Mismatch'
              });
            } else if (result) {
              signJWT(fetchedUser, (_error, token) => {
                if (_error) {
                  return response.status(500).json({
                    message: _error.message,
                    error: _error
                  });
                } else if (token) {
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
      GeneralUtils.printInitiateMessage(
        'UserController.login', 'End',
      );

    } catch (error) {
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'UserController.login ', 'End',
      );
    }

  });


export { userRouter as userRouter }



