import dotenv from 'dotenv';

dotenv.config();

const SERVER_TOKEN_EXPIRETIME = process.env.SERVER_TOKEN_EXPIRETIME || 3600;
const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || 'coolIssuer';
const SERVER_TOKEN_SECRET = process.env.SERVER_TOKEN_SECRET || 'superencryptedsecret';
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
  },
  token: {
    expireTime: SERVER_TOKEN_EXPIRETIME,
    issuer: SERVER_TOKEN_ISSUER,
    secret: SERVER_TOKEN_SECRET
  }
}

export default appConfig;