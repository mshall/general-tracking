"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tracking_stream_controller_1 = require("../../controllers/tracking-stream.controller");
const user_controller_1 = require("../../controllers/user.controller");
const appRouter = express_1.Router();
appRouter.use('/api/tracking-stream', tracking_stream_controller_1.treackingStreamRouter);
appRouter.use('/api/user', user_controller_1.userRouter);
exports.default = appRouter;
