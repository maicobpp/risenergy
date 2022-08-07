import { Router } from 'express';

import { ensureAuthentication } from '../../middlewares/ensureAuthentication';
import { DeleteProjectsController } from './controllers/DeleteProjectsController';
import { StoreProjectController } from './controllers/StoreProjectsController';

const projectsRoutes = Router();

const storeProjectController = new StoreProjectController();
const deleteProjectsController = new DeleteProjectsController();

projectsRoutes.post('/', ensureAuthentication, storeProjectController.handle);

projectsRoutes.delete('/delete', ensureAuthentication, deleteProjectsController.handle);

export { projectsRoutes };
