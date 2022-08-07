import { Router } from 'express';

import { ensureAuthentication } from '../../middlewares/ensureAuthentication';
import { DeleteUnitController } from './controllers/DeleteUnitController';
import { StoreUnitController } from './controllers/StoreUnitController';

const unitsRoutes = Router();

const storeUnitController = new StoreUnitController();
const deleteUnitController = new DeleteUnitController();

unitsRoutes.post('/', ensureAuthentication, storeUnitController.handle);

unitsRoutes.delete('/delete', ensureAuthentication, deleteUnitController.handle);

export { unitsRoutes };
