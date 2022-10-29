import { Request, Response } from 'express';

import { ListCustomersService } from '../services/ListCustomersService';

export class ListCustomersController {
  async handle(request: Request, response: Response) {
    const { org_id } = request.headers as { org_id: string };

    const customers = new ListCustomersService();
    const result = await customers.execute({
      id: org_id,
    });

    return response.json(result);
  }
}
