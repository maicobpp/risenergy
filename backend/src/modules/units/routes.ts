import { Router } from 'express';

import { ensureAuthentication } from '../../middlewares/ensureAuthentication';
import { DeleteUnitController } from './controllers/DeleteUnitController';
import { FindUnitController } from './controllers/FindUnitController';
import { StoreUnitController } from './controllers/StoreUnitController';

const unitsRoutes = Router();

const storeUnitController = new StoreUnitController();
const deleteUnitController = new DeleteUnitController();
const findUnitController = new FindUnitController();

unitsRoutes.post('/store', ensureAuthentication, storeUnitController.handle);

unitsRoutes.delete('/delete', ensureAuthentication, deleteUnitController.handle);

unitsRoutes.get('/', ensureAuthentication, findUnitController.handle);

export { unitsRoutes };
