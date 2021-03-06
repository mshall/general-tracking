"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.treackingStreamRouter = void 0;
const express_1 = require("express");
const tracking_stream_repository_1 = __importDefault(require("../repository/tracking-stream.repository"));
const GeneralUtils_1 = __importDefault(require("../util/GeneralUtils"));
const trackingStreamRouter = express_1.Router();
exports.treackingStreamRouter = trackingStreamRouter;
const trackingStreamRepository = new tracking_stream_repository_1.default();
//-----------------------------------------
// Find all tracking streams
//-----------------------------------------
trackingStreamRouter.
    route('/')
    .get(async (request, response, next) => {
    try {
        const trackingStreamsList = await trackingStreamRepository.findAllTrackingStreams();
        GeneralUtils_1.default.printInitiateMessage("TrackingStreamController.findAllTrackingStreams -> Treacking Stream list: ", JSON.stringify(trackingStreamsList));
        GeneralUtils_1.default.printInitiateMessage('TrackingStreamController.findAllTrackingStreams', 'End');
        return response.json(trackingStreamsList);
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('TrackingStreamController.findAllTrackingStreams ', 'End');
    }
});
//-----------------------------------------
// Find stream given tracking datetime & imei
//-----------------------------------------
trackingStreamRouter.
    route('/stream/:imei/:trackingDateTime')
    .get(async (request, response, next) => {
    //const collection = getCollection('todos');
    try {
        let imei = request.params.imei;
        let trackingDateTime = request.params.trackingDateTime;
        const coffeePodList = await trackingStreamRepository
            .findTrackingStreamByImeiAndDate(imei, new Date(trackingDateTime));
        GeneralUtils_1.default.printInitiateMessage("TrackingStreamController.findByImeiAndDateTime -> Coffee Pod:", JSON.stringify(coffeePodList));
        GeneralUtils_1.default.printInitiateMessage('TrackingStreamController.findByImeiAndDateTime', 'End');
        return response.json(coffeePodList);
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('TrackingStreamController.findByImeiAndDateTime', 'End');
    }
});
//-----------------------------------------
// Add a new tracking stream
//-----------------------------------------
trackingStreamRouter.
    route('/')
    .post(async (request, response, next) => {
    try {
        let incomingTrackingStream = request.body.trackingStream;
        GeneralUtils_1.default.printInitiateMessage("TrackingStreamController.Add -> Incoming stream", JSON.stringify(incomingTrackingStream));
        const addedStream = await trackingStreamRepository
            .addNewTrackingStream(incomingTrackingStream);
        GeneralUtils_1.default.printInitiateMessage("TrackingStreamController.AddNewStream -> Result", JSON.stringify(addedStream));
        GeneralUtils_1.default.printInitiateMessage('TrackingStreamController.AddNewStream', 'End');
        response.send(addedStream);
        return addedStream;
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('TrackingStreamController.AddNewStream', 'End');
        next(error);
    }
});
