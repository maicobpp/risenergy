import { Request, Response } from 'express';

import { OrganizationService } from '../services/OrganizationService';
import { UsersOrgsService } from '../services/UsersOrgsService';

export class OrganizationController {
  async store(request: Request, response: Response) {
    const { id, name } = request.body;
    const { user_id } = request;

    const storeOrganization = new OrganizationService();
    const result = await storeOrganization.store({
      id,
      name,
      user_id,
    });

    return response.json(result);
  }

  async delete(request: Request, response: Response) {
    const { org_id } = request.body;
    const { user_id } = request;

    const getUserOrgs = new UsersOrgsService();
    const userOrg = await getUserOrgs.userOrg({
      org_id,
      user_id,
    });

    if (!userOrg) {
      return response.status(401).json({
        message: 'User does not have permission',
      });
    }

    const deleteOrganization = new OrganizationService();
    const result = await deleteOrganization.delete({
      id: org_id,
    });

    return response.json(result);
  }
}
