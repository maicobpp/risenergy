import { Router } from 'express';

import { ensureAuthentication } from '../../middlewares/ensureAuthentication';
import { AssociateOrganizationController } from './controllers/AssociateOrganizationControllerts';
import { DeleteOrganizationController } from './controllers/DeleteOrganizationController';
import { DissociateOrganizationController } from './controllers/DissociateOrganizationControllerts';
import { FindOrganizationProjectsController } from './controllers/FindOrganizationProjectsController';
import { StoreOrganizationController } from './controllers/StoreOrganizationController';

const organizationsRoutes = Router();

const storeOrganizationController = new StoreOrganizationController();
const deleteOrganizationController = new DeleteOrganizationController();
const associateOrganizationController = new AssociateOrganizationController();
const dissociateOrganizationController = new DissociateOrganizationController();
const findOrganizationProjectsController = new FindOrganizationProjectsController();

organizationsRoutes.post('/', ensureAuthentication, storeOrganizationController.handle);
organizationsRoutes.post('/associate', ensureAuthentication, associateOrganizationController.handle);
organizationsRoutes.post('/dissociate', ensureAuthentication, dissociateOrganizationController.handle);

organizationsRoutes.get('/projects', ensureAuthentication, findOrganizationProjectsController.handle);

organizationsRoutes.delete('/delete', ensureAuthentication, deleteOrganizationController.handle);

export { organizationsRoutes };
