import { Router } from 'express';
import productsRouter from '@modules/products/routes/products.routes';
import usersRouter from '@modules/Users/routes/users.routes';
import sessionRouter from '@modules/Users/routes/session.routes';
import passwordRouter from '@modules/Users/routes/password.routes';
import profileRouter from '@modules/Users/routes/profile.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

export default routes;
