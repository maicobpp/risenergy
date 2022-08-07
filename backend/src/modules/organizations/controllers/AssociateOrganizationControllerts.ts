import { Request, Response } from 'express';

import { AssociateOrganizationService } from '../services/AssociateOrganizationService';

export class AssociateOrganizationController {
  async handle(request: Request, response: Response) {
    // const { org_id } = request.headers as { org_id: string };
    const { org_id } = request.body;
    const { user_id } = request;

    const associateUsersOrgs = new AssociateOrganizationService();
    const result = await associateUsersOrgs.execute({
      org_id,
      user_id,
    });

    return response.json(result);
  }
}
