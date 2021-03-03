"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralUtils_1 = __importDefault(require("../../util/GeneralUtils"));
const user_model_1 = __importDefault(require("../dbmodel/user.model"));
class UserRepository {
    //-----------------------------------------
    // Add a new user
    //-----------------------------------------
    async addNewUser(incomingUser) {
        GeneralUtils_1.default.printStarsLine();
        GeneralUtils_1.default.printInitiateMessage('UserRepository.addNewUser', 'Start');
        GeneralUtils_1.default.printInitiateMessage('UserRepository.addNewUser', 'Incoming: ' + JSON.stringify(incomingUser));
        let user = new user_model_1.default();
        (incomingUser.trackingDateTime) ? user.email = incomingUser.email : '';
        (incomingUser.email) ? user.email = incomingUser.imei : '';
        (incomingUser.username) ? user.username = incomingUser.username : 0;
        (incomingUser.password) ? user.password = incomingUser.password : 0;
        try {
            const savedStream = await user.save();
            GeneralUtils_1.default.printInitiateMessage('UserRepository.addNewUser', 'Result: '
                + JSON.stringify(savedStream));
            GeneralUtils_1.default.printInitiateMessage('UserRepository.addNewUser', 'End');
            GeneralUtils_1.default.printStarsLine();
            return savedStream;
        }
        catch (e) {
            GeneralUtils_1.default.printInitiateMessage('UserRepository.addNewUser', 'Exception');
            console.error(e);
            GeneralUtils_1.default.printInitiateMessage('UserRepository.addNewUser', 'End');
            GeneralUtils_1.default.printStarsLine();
        }
    }
    //-----------------------------------------
    // Find all users
    //-----------------------------------------
    async findAllUsers() {
        const usersList = await user_model_1.default.findAll();
        GeneralUtils_1.default.printInitiateMessage('UserRepository.findAllUsers', 'Result: '
            + JSON.stringify(usersList));
        GeneralUtils_1.default.printInitiateMessage('UserRepository.findAllUsers', 'End');
        return usersList;
    }
    //-----------------------------------------
    // Find user by email and password
    //-----------------------------------------
    async findUserByEmailAndPassword(incomingEmail, incomingPassword) {
        let user = null;
        try {
            GeneralUtils_1.default.printInitiateMessage("UserRepository.findUserByEmailAndPassword", "Start");
            user = await user_model_1.default.findOne({ where: { email: incomingEmail, password: incomingPassword } });
            GeneralUtils_1.default.printInitiateMessage("UserRepository.findUserByEmailAndPassword", "Result: " + JSON.stringify(user));
            GeneralUtils_1.default.printInitiateMessage("UserRepository.findUserByEmailAndPassword", "End");
        }
        catch (error) {
            console.error(error);
        }
        return user;
    }
    //-----------------------------------------
    // Find user by username and password
    //-----------------------------------------
    async findUserByUsernameAndPassword(incomingUsername, incomingPassword) {
        let user = null;
        try {
            user = await user_model_1.default.findOne({ where: { username: incomingUsername, password: incomingPassword } });
        }
        catch (error) {
            console.error(error);
        }
        return user;
    }
    //-----------------------------------------
    // Find user by username
    //-----------------------------------------
    async findUserByUsername(incomingUsername) {
        let user = null;
        try {
            GeneralUtils_1.default.printInitiateMessage("UserRepository.findUserByUsername", "Start");
            user = await user_model_1.default.findOne({ where: { username: incomingUsername } });
            GeneralUtils_1.default.printInitiateMessage("UserRepository.findUserByUsername", "Result: " + JSON.stringify(user));
            GeneralUtils_1.default.printInitiateMessage("UserRepository.findUserByUsername", "End");
        }
        catch (error) {
            console.error(error);
        }
        return user;
    }
    //-----------------------------------------
    // Find user by username
    //-----------------------------------------
    async findUserByEmail(incomingEmail) {
        let user = null;
        try {
            GeneralUtils_1.default.printInitiateMessage("UserRepository.findUserByEmail", "Start");
            user = await user_model_1.default.findOne({ where: { email: incomingEmail } });
            GeneralUtils_1.default.printInitiateMessage("UserRepository.findUserByEmail", "Result: " + JSON.stringify(user));
            GeneralUtils_1.default.printInitiateMessage("UserRepository.findUserByEmail", "End");
        }
        catch (error) {
            console.error(error);
        }
        return user;
    }
}
exports.default = UserRepository;
