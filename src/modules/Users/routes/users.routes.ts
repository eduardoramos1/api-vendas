import { Router } from 'express';
// Celebreta serve para fazer validação dos dados que serão enviados nas rotas
import { celebrate, Joi, Segments } from 'celebrate';
import UsersController from '../controllers/UsersController';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';
import multer from 'multer';
import uploadConfig from '@config/upload';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';
import UserAvatarController from '../controllers/UserAvatarController';

const usersRouter = Router();
const usersController = new UsersController();
const usersAvatarController = new UserAvatarController();
const upload = multer(uploadConfig);

usersRouter.get('/', isAuthenticated, usersController.listUsers);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

usersRouter.patch(
  '/avatar',
  isAuthenticated,
  upload.single('avatar'),
  usersAvatarController.update,
);


export default usersRouter;
