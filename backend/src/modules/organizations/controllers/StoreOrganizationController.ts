import { Request, Response } from 'express';

import { StoreOrganizationService } from '../services/StoreOrganizationService';

export class StoreOrganizationController {
  async handle(request: Request, response: Response) {
    const { id, name } = request.body;
    const { user_id } = request;

    const storeOrganization = new StoreOrganizationService();
    const result = await storeOrganization.execute({
      id,
      name,
      user_id,
    });

    return response.json(result);
  }
}
