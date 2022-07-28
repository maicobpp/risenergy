import { Router } from 'express';

import { ensureAuthentication } from './middlewares/ensureAuthentication';
import { AuthenticationController } from './modules/controllers/AuthenticationController';
import { OrganizationController } from './modules/controllers/OrganizationController';
import { UserController } from './modules/controllers/UserController';
import { UsersOrgsController } from './modules/controllers/UsersOrgsController';

const routes = Router();

const userController = new UserController();
const authenticationController = new AuthenticationController();
const organizationController = new OrganizationController();
const usersOrgsController = new UsersOrgsController();

routes.post('/user', userController.store);
routes.post('/authenticate', authenticationController.handle);
routes.post('/organization', ensureAuthentication, organizationController.store);
routes.post('/associate', ensureAuthentication, usersOrgsController.associate);
routes.post('/dissociate', ensureAuthentication, usersOrgsController.dissociate);
routes.get('/user/organizations', ensureAuthentication, usersOrgsController.getUserOrgs);
routes.delete('/organization/delete', ensureAuthentication, organizationController.delete);

export { routes };
