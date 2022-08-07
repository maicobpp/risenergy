import { Router } from 'express';

import { authenticationRoutes } from './modules/account/routes';
import { customersRoutes } from './modules/customers/routes';
import { monthDataRoutes } from './modules/monthData/routes';
import { organizationsRoutes } from './modules/organizations/routes';
import { projectsRoutes } from './modules/projects/routes';
import { unitsRoutes } from './modules/units/routes';
import { userRoutes } from './modules/users/routes';

const routes = Router();

routes.use('/authenticate', authenticationRoutes);
routes.use('/customer', customersRoutes);
routes.use('/monthdata', monthDataRoutes);
routes.use('/organization', organizationsRoutes);
routes.use('/project', projectsRoutes);
routes.use('/unit', unitsRoutes);
routes.use('/user', userRoutes);

export { routes };
