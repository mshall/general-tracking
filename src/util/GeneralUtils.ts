
import {v4 as uuidv4} from 'uuid';




export default class GeneralUtils{
  static printInitiateMessage(firstInput: string, secondInput: string) {
    console.log(firstInput + ' -> ' + secondInput);
  }

  static printStarsLine() {
    console.log('****************************');
  }

  static printErrorMessage(firstInput: string, secondInput: string) {
    console.error(firstInput + ' -> ' + secondInput);
  }

  static getUUIDV4(){
    let myuuid = uuidv4();
    console.log('UUIDV4: '+ myuuid);
    return myuuid;
  }
}