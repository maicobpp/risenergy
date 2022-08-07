import { Request, Response } from 'express';

import { CheckUserOrgsService } from '../../users/services/CheckUserOrgService';
import { DeleteOrganizationService } from '../services/DeleteOrganizationService';

export class DeleteOrganizationController {
  async handle(request: Request, response: Response) {
    const { org_id } = request.body;
    const { user_id } = request;

    const checkUserOrgs = new CheckUserOrgsService();
    const userOrg = await checkUserOrgs.execute({
      org_id,
      user_id,
    });

    if (!userOrg) {
      return response.status(401).json({
        message: 'User does not have permission',
      });
    }

    const deleteOrganization = new DeleteOrganizationService();
    const result = await deleteOrganization.execute({
      id: org_id,
    });

    return response.json(result);
  }
}
