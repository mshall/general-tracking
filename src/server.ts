import express from 'express';
import * as bodyParser from 'body-parser';
import { addModel } from './util/database/database';
import { requestLoggerMiddleware } from './util/request-logger-middleware';
import TrackingStream from './database/dbmodel/tracking-stream.model';
import User from './database/dbmodel/user.model';
import appRouter from './routes';

const app = express();
app.use(bodyParser.json());
app.use(requestLoggerMiddleware)
app.use(appRouter);

app.get('/hello', (req, res, next) => {
  res.send('Hello world')
});

addModel(TrackingStream);
addModel(User);
export { app }
app.listen(process.env.PORT || 4040, () => {
  console.log("server started");
})