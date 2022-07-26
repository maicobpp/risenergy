import { Request, Response } from 'express';

import { OrganizationService } from '../services/OrganizationService';

export class OrganizationController {
  async store(request: Request, response: Response) {
    const { name } = request.body;
    const { user_id } = request;

    const storeOrganization = new OrganizationService();
    const result = await storeOrganization.store({
      name,
      user_id,
    });

    return response.json(result);
  }
}
