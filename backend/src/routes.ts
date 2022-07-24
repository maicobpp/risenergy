import { Router } from 'express';

import { isAuthenticated } from './middlewares/isAuthenticated';
import { AuthenticateUserController } from './modules/account/AuthenticateUserControler';
import { CreateOrganizationController } from './modules/organization/CreateOrganizationController';
import { CreateUserController } from './modules/users/CreateUserController';

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createOrganizationController = new CreateOrganizationController();

routes.post('/user/', createUserController.handle);
routes.post('/authenticate/', authenticateUserController.handle);
routes.post('/organization/', isAuthenticated, createOrganizationController.handle);

export { routes };
