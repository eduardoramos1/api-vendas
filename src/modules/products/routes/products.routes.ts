import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
// Celebreta serve para fazer validação dos dados que serão enviados nas rotas
import { celebrate, Joi, Segments } from 'celebrate';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/', productsController.listProducts);

productsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    },
  }),
  productsController.listOneProduct,
);

productsRouter.post(
  '/',
  celebrate({
    [Segments.BODY] : {
      name: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required()
    }
  }),
  productsController.create
  );

productsRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY] : {
      name: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required()
    }
  }),
  productsController.update
  );

productsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  productsController.delete
  );

export default productsRouter;
