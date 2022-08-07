import { Router } from 'express';

import { ensureAuthentication } from '../../middlewares/ensureAuthentication';
import { DeleteMonthDataController } from './controllers/DeleteMonthDataController';
import { StoreMonthDataController } from './controllers/StoreMonthDataController';

const monthDataRoutes = Router();

const storeMonthDataController = new StoreMonthDataController();
const deleteMonthDataController = new DeleteMonthDataController();

monthDataRoutes.post('/', ensureAuthentication, storeMonthDataController.handle);

monthDataRoutes.delete('/delete', ensureAuthentication, deleteMonthDataController.handle);

export { monthDataRoutes };
