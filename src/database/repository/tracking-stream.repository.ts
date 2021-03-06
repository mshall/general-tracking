import { DATE } from "sequelize/types";
import GeneralUtils from "../../util/GeneralUtils";
import TrackingStream from "../dbmodel/tracking-stream.model";


export default class TreackingStreamRepository {

  //-----------------------------------------
  // Add a new tracking stream
  //-----------------------------------------
  async addNewTrackingStream(incomingTrackingStream: any): Promise<any> {
    GeneralUtils.printStarsLine();
    GeneralUtils.printInitiateMessage('TreackingStreamRepository.addNewTrackingStream', 'Start');
    GeneralUtils.printInitiateMessage('TreackingStreamRepository.addNewTrackingStream', 'Incoming: '+ JSON.stringify(incomingTrackingStream));
    let trackingStream: TrackingStream = new TrackingStream();
    (incomingTrackingStream.trackingDateTime)? trackingStream.trackingDateTime = incomingTrackingStream.trackingDateTime:  '';
    (incomingTrackingStream.imei)? trackingStream.imei = incomingTrackingStream.imei: '';
    (incomingTrackingStream.longitude)? trackingStream.longitude = incomingTrackingStream.longitude: 0;
    (incomingTrackingStream.latitude)? trackingStream.latitude = incomingTrackingStream.latitude: 0;
    (incomingTrackingStream.kph)? trackingStream.kph = incomingTrackingStream.kph : 0;
    (incomingTrackingStream.firstEvent)? trackingStream.firstEvent = incomingTrackingStream.firstEvent: 0;
    (incomingTrackingStream.secondEvent)? trackingStream.secondEvent = incomingTrackingStream.secondEvent: 0;
    (incomingTrackingStream.thirdEvent)? trackingStream.thirdEvent = incomingTrackingStream.thirdEvent: 0;
    (incomingTrackingStream.fourthEvent)? trackingStream.fourthEvent = incomingTrackingStream.fourthEvent: 0;
    (incomingTrackingStream.fifthEvent)? trackingStream.fifthEvent = incomingTrackingStream.fifthEvent: 0;
    trackingStream.CreatedAt = new Date();
    trackingStream.UpdatedAt = new Date();
    try {
      const savedStream = await trackingStream.save();
      GeneralUtils.printInitiateMessage(
        'TreackingStreamRepository.addNewTrackingStream', 'Result: '
      + JSON.stringify(savedStream));
      GeneralUtils.printInitiateMessage(
        'TreackingStreamRepository.addNewTrackingStream', 'End');
      GeneralUtils.printStarsLine();
      return savedStream;
    } catch (e) {
      GeneralUtils.printInitiateMessage(
        'TreackingStreamRepository.addNewTrackingStream', 'Exception');
      console.error(e);
      GeneralUtils.printInitiateMessage(
        'TreackingStreamRepository.addNewTrackingStream', 'End');
      GeneralUtils.printStarsLine();
    }
  }
  //-----------------------------------------
  // Find all tracking streams
  //-----------------------------------------
  async findAllTrackingStreams() {
    const trackingStreamsList = await TrackingStream.findAll();
    GeneralUtils.printInitiateMessage(
      'TreackingStreamRepository.findAllTrackingStreams', 'Result: '
    + JSON.stringify(trackingStreamsList));
    GeneralUtils.printInitiateMessage(
      'TreackingStreamRepository.findAllTrackingStreams', 'End');
    return trackingStreamsList;
  }
  //-----------------------------------------
  // Find tracking stream by imei and date time 
  //-----------------------------------------
  async findTrackingStreamByImeiAndDate(incomingImei: string, incomingTrackingDateTime: Date): Promise<any> {
    let trackingStream = null;
    try {
      trackingStream = await TrackingStream.findOne({ where: { imei: incomingImei, trackingDateTime: incomingTrackingDateTime } });
    } catch (error) {
      console.error(error);
    }
    return trackingStream;
  }



  async UpdateConfigProperty(trackingStream: any) {
    let updateResult: any = null;
    try {
      updateResult = await TrackingStream.update<TrackingStream>(
        trackingStream,
        {
          where: { imdei: trackingStream.imdei, trackingDateTime: trackingStream.trackingDateTime }
        });
    } catch (error) {
      console.error(error);
    }
    return updateResult;
  }
}
