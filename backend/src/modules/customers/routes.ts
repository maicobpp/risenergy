import { Router } from 'express';

import { ensureAuthentication } from '../../middlewares/ensureAuthentication';
import { DeleteCustomerController } from './controllers/DeleteCustomerController';
import { FindCustomerController } from './controllers/FindCustomersController';
import { ListCustomersController } from './controllers/ListCustomersController';
import { ListCustomerUnitsController } from './controllers/ListCustomersUnitsController';
import { StoreCustomerController } from './controllers/StoreCustomerController';

const customersRoutes = Router();

const storeCustomerController = new StoreCustomerController();
const deleteCustomerController = new DeleteCustomerController();
const listCustomersController = new ListCustomersController();
const findCustomerController = new FindCustomerController();
const listCustomerUnitsController = new ListCustomerUnitsController();

customersRoutes.post('/store', ensureAuthentication, storeCustomerController.handle);
customersRoutes.delete('/delete', ensureAuthentication, deleteCustomerController.handle);
customersRoutes.get('/list', ensureAuthentication, listCustomersController.handle);
customersRoutes.get('/', ensureAuthentication, findCustomerController.handle);
customersRoutes.get('/units', ensureAuthentication, listCustomerUnitsController.handle);

export { customersRoutes };
