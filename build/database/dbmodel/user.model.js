"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ field: 'userId', type: sequelize_typescript_1.DataType.STRING, primaryKey: true })
], User.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column({ field: 'username', type: sequelize_typescript_1.DataType.STRING })
], User.prototype, "username", void 0);
__decorate([
    sequelize_typescript_1.Column({ field: 'email', type: sequelize_typescript_1.DataType.STRING })
], User.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column({ field: 'password', type: sequelize_typescript_1.DataType.STRING })
], User.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column({ field: 'createdAt', type: sequelize_typescript_1.DataType.DATE, defaultValue: sequelize_typescript_1.DataType.NOW })
], User.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column({ field: 'updatedAt', type: sequelize_typescript_1.DataType.DATE, defaultValue: sequelize_typescript_1.DataType.NOW })
], User.prototype, "updatedAt", void 0);
User = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'users',
        timestamps: false,
        freezeTableName: true,
    })
], User);
exports.default = User;
