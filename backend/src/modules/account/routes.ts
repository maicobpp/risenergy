import { Router } from 'express';

import { AuthenticationController } from './controllers/AuthenticationController';

const authenticationRoutes = Router();

const authenticationController = new AuthenticationController();

authenticationRoutes.post('/', authenticationController.handle);

export { authenticationRoutes };
