import * as express from 'express';
import { Router } from 'express';
import GeneralUtils from "../util/GeneralUtils";
import TreackingStreamRepository from '../database/repository/tracking-stream.repository';

const trackingStreamRouter = Router();
const trackingStreamRepository: TreackingStreamRepository = new TreackingStreamRepository();

//-----------------------------------------
// Find all tracking streams
//-----------------------------------------
trackingStreamRouter.
  route('/')
  .get(async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction) => {
    try {
      const trackingStreamsList = await trackingStreamRepository.findAllTrackingStreams();
      GeneralUtils.printInitiateMessage(
        "TrackingStreamController.findAllTrackingStreams -> Treacking Stream list: ",
        JSON.stringify(trackingStreamsList));
      GeneralUtils.printInitiateMessage(
        'TrackingStreamController.findAllTrackingStreams', 'End',
      );
      return response.json(trackingStreamsList);
    } catch (error) {
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'TrackingStreamController.findAllTrackingStreams ', 'End',
      );
    }

  });

//-----------------------------------------
// Find stream given tracking datetime & imei
//-----------------------------------------
trackingStreamRouter.
  route('/stream/:imei/:trackingDateTime')
  .get(async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction) => {
    //const collection = getCollection('todos');
    try {
      let imei = request.params.imei;
      let trackingDateTime = request.params.trackingDateTime;
      const coffeePodList = await trackingStreamRepository
        .findTrackingStreamByImeiAndDate(imei, new Date(trackingDateTime));
      GeneralUtils.printInitiateMessage(
        "TrackingStreamController.findByImeiAndDateTime -> Coffee Pod:",
        JSON.stringify(coffeePodList));
      GeneralUtils.printInitiateMessage(
        'TrackingStreamController.findByImeiAndDateTime', 'End',
      );
      return response.json(coffeePodList);
    } catch (error) {
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'TrackingStreamController.findByImeiAndDateTime', 'End',
      );
    }
  });

//-----------------------------------------
// Add a new tracking stream
//-----------------------------------------
trackingStreamRouter.
  route('/')
  .post(async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction) => {
    //const collection = getCollection('todos');
    try {
      let incomingTrackingStream = request.body.trackingStream;
      GeneralUtils.printInitiateMessage(
        "TrackingStreamController.Add -> Incoming stream",
        JSON.stringify(incomingTrackingStream));
      const addedStream = await trackingStreamRepository
        .addNewTrackingStream(incomingTrackingStream);
      GeneralUtils.printInitiateMessage(
        "TrackingStreamController.AddNewStream -> Result",
        JSON.stringify(addedStream));
      GeneralUtils.printInitiateMessage('TrackingStreamController.AddNewStream', 'End');
      response.send(addedStream);
      return addedStream;
    } catch (error) {
      console.error(error);
      GeneralUtils.printInitiateMessage('TrackingStreamController.AddNewStream', 'End');
      next(error);
    }

  });

export { trackingStreamRouter as treackingStreamRouter }



