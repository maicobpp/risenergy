import { Router } from 'express';

import { isAuthenticated } from './middlewares/isAuthenticated';
import { AuthenticateUserController } from './modules/account/AuthenticateUserControler';
import { CreateUserController } from './modules/users/CreateUserController';

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

routes.post('/user/', createUserController.handle);
routes.post('/authenticate/', authenticateUserController.handle);

export { routes };
