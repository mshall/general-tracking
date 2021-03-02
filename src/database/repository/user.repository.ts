import GeneralUtils from "../../util/GeneralUtils";
import User from "../dbmodel/user.model";


export default class UserRepository {

  //-----------------------------------------
  // Add a new user
  //-----------------------------------------
  async addNewUser(incomingUser: any): Promise<any> {
    GeneralUtils.printStarsLine();
    GeneralUtils.printInitiateMessage('UserRepository.addNewUser', 'Start');
    GeneralUtils.printInitiateMessage('UserRepository.addNewUser', 'Incoming: '+ JSON.stringify(incomingUser));
    let user: User = new User();
    (incomingUser.trackingDateTime)? user.email = incomingUser.email:  '';
    (incomingUser.email)? user.email = incomingUser.imei: '';
    (incomingUser.username)? user.username = incomingUser.username: 0;
    (incomingUser.password)? user.password = incomingUser.password: 0;
    try {
      const savedStream = await user.save();
      GeneralUtils.printInitiateMessage(
        'UserRepository.addNewUser', 'Result: '
      + JSON.stringify(savedStream));
      GeneralUtils.printInitiateMessage(
        'UserRepository.addNewUser', 'End');
      GeneralUtils.printStarsLine();
      return savedStream;
    } catch (e) {
      GeneralUtils.printInitiateMessage(
        'UserRepository.addNewUser', 'Exception');
      console.error(e);
      GeneralUtils.printInitiateMessage(
        'UserRepository.addNewUser', 'End');
      GeneralUtils.printStarsLine();
    }
  }
  //-----------------------------------------
  // Find all users
  //-----------------------------------------
  async findAllUsers() {
    const usersList = await User.findAll();
    GeneralUtils.printInitiateMessage(
      'UserRepository.findAllUsers', 'Result: '
    + JSON.stringify(usersList));
    GeneralUtils.printInitiateMessage(
      'UserRepository.findAllUsers', 'End');
    return usersList;
  }
  //-----------------------------------------
  // Find user by email and password
  //-----------------------------------------
  async findUserByEmailAndPassword(incomingEmail: string, incomingPassword: string): Promise<any> {
    let user = null;
    try {
      GeneralUtils.printInitiateMessage("UserRepository.findUserByEmailAndPassword", "Start");
      user = await User.findOne({ where: { email: incomingEmail , password: incomingPassword} });
      GeneralUtils.printInitiateMessage("UserRepository.findUserByEmailAndPassword", "Result: "+ JSON.stringify(user));
      GeneralUtils.printInitiateMessage("UserRepository.findUserByEmailAndPassword", "End");
    } catch (error) {
      console.error(error);
    }
    return user;
  }


  //-----------------------------------------
  // Find user by username and password
  //-----------------------------------------
  async findUserByUsernameAndPassword(incomingUsername: string, incomingPassword: string): Promise<any> {
    let user = null;
    try {
      user = await User.findOne({ where: { username: incomingUsername, password: incomingPassword } });
    } catch (error) {
      console.error(error);
    }
    return user;
  }

}
