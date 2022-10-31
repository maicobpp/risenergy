import { Router } from 'express';

import { ensureAuthentication } from '../../middlewares/ensureAuthentication';
import { DeleteProjectsController } from './controllers/DeleteProjectsController';
import { FindProjectController } from './controllers/FindProjectController';
import { ListProjectsController } from './controllers/ListProjectsController';
import { StoreProjectController } from './controllers/StoreProjectsController';

const projectsRoutes = Router();

const storeProjectController = new StoreProjectController();
const listProjectsController = new ListProjectsController();
const findProjectController = new FindProjectController();
const deleteProjectsController = new DeleteProjectsController();

projectsRoutes.post('/store', ensureAuthentication, storeProjectController.handle);

projectsRoutes.get('/list', ensureAuthentication, listProjectsController.handle);
projectsRoutes.get('/', ensureAuthentication, findProjectController.handle);

projectsRoutes.delete('/delete', ensureAuthentication, deleteProjectsController.handle);

export { projectsRoutes };
