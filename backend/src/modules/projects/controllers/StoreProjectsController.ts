import { Request, Response } from 'express';

import { StoreProjectService } from '../services/StoreProjectService';

export class StoreProjectController {
  async handle(request: Request, response: Response) {
    const { org_id } = request.headers as { org_id: string };
    const {
      id, date, status, customer_id, city_id,
    } = request.body;

    const storeProject = new StoreProjectService();
    const result = await storeProject.execute({
      id,
      date: new Date(date),
      status,
      customer_id,
      org_id,
      city_id,
    });

    return response.json(result);
  }
}
