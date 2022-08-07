import { Router } from 'express';

import { ensureAuthentication } from '../../middlewares/ensureAuthentication';
import { DeleteCustomerController } from './controllers/DeleteCustomerController';
import { StoreCustomerController } from './controllers/StoreCustomerController';

const customersRoutes = Router();

const storeCustomerController = new StoreCustomerController();
const deleteCustomerController = new DeleteCustomerController();

customersRoutes.post('/', ensureAuthentication, storeCustomerController.handle);

customersRoutes.delete('/delete', ensureAuthentication, deleteCustomerController.handle);

export { customersRoutes };
