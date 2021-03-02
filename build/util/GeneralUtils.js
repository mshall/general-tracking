"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class GeneralUtils {
    static printInitiateMessage(firstInput, secondInput) {
        console.log(firstInput + ' -> ' + secondInput);
    }
    static printStarsLine() {
        console.log('****************************');
    }
    static printErrorMessage(firstInput, secondInput) {
        console.error(firstInput + ' -> ' + secondInput);
    }
    static getUUIDV4() {
        let myuuid = uuid_1.v4();
        console.log('UUIDV4: ' + myuuid);
        return myuuid;
    }
}
exports.default = GeneralUtils;
