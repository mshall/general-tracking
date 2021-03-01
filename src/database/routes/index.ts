import { Router } from 'express'
import { treackingStreamRouter } from '../../controllers/tracking-stream.controller';

const appRouter = Router()

appRouter.use('/api/tracking-stream', treackingStreamRouter);
export default appRouter;