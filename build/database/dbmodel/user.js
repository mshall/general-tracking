"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const JSONObjectMappter = __importStar(require("json-object-mapper"));
let TrackingStream = 
/*
CREATE TABLE `fleet`.`trackingstream` (
  `datetime1` DATETIME NOT NULL,
  `imei` CHAR(15) NOT NULL,
  `longitude` FLOAT NOT NULL,
  `latitude` FLOAT NOT NULL,
  `kph` INT NULL,
  `event0` SMALLINT(1) NULL,
  `event1` SMALLINT(1) NULL,
  `event2` SMALLINT(1) NULL,
  `event3` SMALLINT(1) NULL,
  `event4` SMALLINT(1) NULL,
  PRIMARY KEY (`datetime1`, `imei`));
*/
class TrackingStream extends sequelize_typescript_1.Model {
};
__decorate([
    JSONObjectMappter.JsonProperty({ type: String, name: 'trackingDateTime' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE, primaryKey: true })
], TrackingStream.prototype, "trackingDateTime", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, primaryKey: true })
], TrackingStream.prototype, "imei", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.NUMBER)
], TrackingStream.prototype, "longitude", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.NUMBER)
], TrackingStream.prototype, "latitude", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.NUMBER)
], TrackingStream.prototype, "kph", void 0);
__decorate([
    JSONObjectMappter.JsonProperty({ type: Number, name: 'firstEvent' }),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.NUMBER)
], TrackingStream.prototype, "firstEvent", void 0);
__decorate([
    JSONObjectMappter.JsonProperty({ type: Number, name: 'secondEvent' }),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.NUMBER)
], TrackingStream.prototype, "secondEvent", void 0);
__decorate([
    JSONObjectMappter.JsonProperty({ type: Number, name: 'thirdEvent' }),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.NUMBER)
], TrackingStream.prototype, "thirdEvent", void 0);
__decorate([
    JSONObjectMappter.JsonProperty({ type: Number, name: 'fourthEvent' }),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.NUMBER)
], TrackingStream.prototype, "fourthEvent", void 0);
__decorate([
    JSONObjectMappter.JsonProperty({ type: Number, name: 'fifthEvent' }),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.NUMBER)
], TrackingStream.prototype, "fifthEvent", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
], TrackingStream.prototype, "CreatedAt", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
], TrackingStream.prototype, "UpdatedAt", void 0);
TrackingStream = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'trackingstream',
        timestamps: false,
        freezeTableName: true,
    })
    /*
    CREATE TABLE `fleet`.`trackingstream` (
      `datetime1` DATETIME NOT NULL,
      `imei` CHAR(15) NOT NULL,
      `longitude` FLOAT NOT NULL,
      `latitude` FLOAT NOT NULL,
      `kph` INT NULL,
      `event0` SMALLINT(1) NULL,
      `event1` SMALLINT(1) NULL,
      `event2` SMALLINT(1) NULL,
      `event3` SMALLINT(1) NULL,
      `event4` SMALLINT(1) NULL,
      PRIMARY KEY (`datetime1`, `imei`));
    */
], TrackingStream);
exports.default = TrackingStream;
