import { Router } from 'express';
// Celebreta serve para fazer validação dos dados que serão enviados nas rotas
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';
import ProfileController from '../controllers/ProfileController';

const profileRouter = Router();
const profileController = new ProfileController();

// chama o middleware em todas as rotas
profileRouter.use(isAuthenticated);

profileRouter.get('/', profileController.listOneUser);

profileRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().optional(),
      old_password: Joi.string(),
      password_confirmation: Joi.string()
        .valid(Joi.ref('password'))
        .when('password', {
          is: Joi.exist,
          then: Joi.required(),
        }),
    },
  }),
  profileController.update,
);

export default profileRouter;
