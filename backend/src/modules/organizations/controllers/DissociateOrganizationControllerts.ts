import { Request, Response } from 'express';

import { DissociateOrganizationService } from '../services/DissociateOrganizationService';

export class DissociateOrganizationController {
  async handle(request: Request, response: Response) {
    const { org_id } = request.body;
    const { user_id } = request;

    const dissociateUsersOrgs = new DissociateOrganizationService();
    const result = await dissociateUsersOrgs.execute({
      org_id,
      user_id,
    });

    return response.json(result);
  }
}
