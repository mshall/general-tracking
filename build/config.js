"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let appConfig = {
    "database": {
        "username": "root",
        "password": "root2021",
        "database": "fleet",
        "host": "127.0.0.1",
        "port": 3306,
        "logging": true,
        "dialect": "mysql",
        "sync": {
            "force": true
        }
    }
};
exports.default = appConfig;
