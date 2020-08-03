import { Router } from 'express';
import UsersRouter from './Users.routes';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', UsersRouter);

export default routes;