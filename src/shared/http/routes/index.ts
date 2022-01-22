import { response, Router } from 'express';

const routes = Router();

routes.get('/', (req, res, next) => {
  return res.json({ message: ' Hello Dev!' });
});

export default routes;
