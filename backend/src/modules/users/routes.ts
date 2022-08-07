import { Router } from 'express';

import { ensureAuthentication } from '../../middlewares/ensureAuthentication';
import { FindUserOrgsController } from './controllers/FindUserOrgsController';
import { StoreUserController } from './controllers/StoreUserController';

const userRoutes = Router();

const storeUserController = new StoreUserController();
const findUserOrgsController = new FindUserOrgsController();

userRoutes.post('/', storeUserController.handle);

userRoutes.get('/organizations', ensureAuthentication, findUserOrgsController.handle);

export { userRoutes };
