import { Router } from 'express';

import { ensureAuthentication } from '../../middlewares/ensureAuthentication';
import { ListUserOrgsController } from './controllers/ListUserOrgsController';
import { StoreUserController } from './controllers/StoreUserController';

const userRoutes = Router();

const storeUserController = new StoreUserController();
const listUserOrgsController = new ListUserOrgsController();

userRoutes.post('/', storeUserController.handle);

userRoutes.get('/organizations', ensureAuthentication, listUserOrgsController.handle);

export { userRoutes };
