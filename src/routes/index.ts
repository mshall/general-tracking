import { Router } from 'express'
import { treackingStreamRouter } from '../controllers/tracking-stream.controller';
import { userRouter } from '../controllers/user.controller';
import extractJWT from '../middleware/extractJWT';

const appRouter = Router()

appRouter.use('/api/tracking-stream', extractJWT, treackingStreamRouter);
appRouter.use('/api/user', userRouter);
export default appRouter;