import { Router } from 'express'
import { treackingStreamRouter } from '../../controllers/tracking-stream.controller';
import { userRouter } from '../../controllers/user.controller';

const appRouter = Router()

appRouter.use('/api/tracking-stream', treackingStreamRouter);
appRouter.use('/api/user', userRouter);
export default appRouter;