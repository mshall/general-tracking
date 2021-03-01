"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralUtils_1 = __importDefault(require("../../util/GeneralUtils"));
const tracking_stream_model_1 = __importDefault(require("../dbmodel/tracking-stream.model"));
class TreackingStreamRepository {
    //-----------------------------------------
    // Add a new tracking stream
    //-----------------------------------------
    async addNewTrackingStream(incomingTrackingStream) {
        GeneralUtils_1.default.printStarsLine();
        GeneralUtils_1.default.printInitiateMessage('TreackingStreamRepository.addNewTrackingStream', 'Start');
        GeneralUtils_1.default.printInitiateMessage('TreackingStreamRepository.addNewTrackingStream', 'Incoming: ' + JSON.stringify(incomingTrackingStream));
        let trackingStream = new tracking_stream_model_1.default();
        (incomingTrackingStream.trackingDateTime) ? trackingStream.trackingDateTime = incomingTrackingStream.trackingDateTime : '';
        (incomingTrackingStream.imei) ? trackingStream.imei = incomingTrackingStream.imei : '';
        (incomingTrackingStream.longitude) ? trackingStream.longitude = incomingTrackingStream.longitude : 0;
        (incomingTrackingStream.latitude) ? trackingStream.latitude = incomingTrackingStream.latitude : 0;
        (incomingTrackingStream.kph) ? trackingStream.kph = incomingTrackingStream.kph : 0;
        (incomingTrackingStream.firstEvent) ? trackingStream.firstEvent = incomingTrackingStream.firstEvent : 0;
        (incomingTrackingStream.secondEvent) ? trackingStream.secondEvent = incomingTrackingStream.secondEvent : 0;
        (incomingTrackingStream.thirdEvent) ? trackingStream.thirdEvent = incomingTrackingStream.thirdEvent : 0;
        (incomingTrackingStream.fourthEvent) ? trackingStream.fourthEvent = incomingTrackingStream.fourthEvent : 0;
        (incomingTrackingStream.fifthEvent) ? trackingStream.fifthEvent = incomingTrackingStream.fifthEvent : 0;
        try {
            const savedStream = await trackingStream.save();
            GeneralUtils_1.default.printInitiateMessage('TreackingStreamRepository.addNewTrackingStream', 'Result: '
                + JSON.stringify(savedStream));
            GeneralUtils_1.default.printInitiateMessage('TreackingStreamRepository.addNewTrackingStream', 'End');
            GeneralUtils_1.default.printStarsLine();
            return savedStream;
        }
        catch (e) {
            GeneralUtils_1.default.printInitiateMessage('TreackingStreamRepository.addNewTrackingStream', 'Exception');
            console.error(e);
            GeneralUtils_1.default.printInitiateMessage('TreackingStreamRepository.addNewTrackingStream', 'End');
            GeneralUtils_1.default.printStarsLine();
        }
    }
    //-----------------------------------------
    // Find all tracking streams
    //-----------------------------------------
    async findAllTrackingStreams() {
        const trackingStreamsList = await tracking_stream_model_1.default.findAll();
        GeneralUtils_1.default.printInitiateMessage('TreackingStreamRepository.findAllTrackingStreams', 'Result: '
            + JSON.stringify(trackingStreamsList));
        GeneralUtils_1.default.printInitiateMessage('TreackingStreamRepository.findAllTrackingStreams', 'End');
        return trackingStreamsList;
    }
    //-----------------------------------------
    // Find tracking stream by imei and date time 
    //-----------------------------------------
    async findTrackingStreamByImeiAndDate(incomingImei, incomingTrackingDateTime) {
        let trackingStream = null;
        try {
            trackingStream = await tracking_stream_model_1.default.findOne({ where: { imei: incomingImei, trackingDateTime: incomingTrackingDateTime } });
        }
        catch (error) {
            console.error(error);
        }
        return trackingStream;
    }
    async UpdateConfigProperty(trackingStream) {
        let updateResult = null;
        try {
            updateResult = await tracking_stream_model_1.default.update(trackingStream, {
                where: { imdei: trackingStream.imdei, trackingDateTime: trackingStream.trackingDateTime }
            });
        }
        catch (error) {
            console.error(error);
        }
        return updateResult;
    }
}
exports.default = TreackingStreamRepository;
