import { Request, Response } from 'express';

import { FindCustomerService } from '../services/FindCustomerService';

export class FindCustomerController {
  async handle(request: Request, response: Response) {
    const { id } = request.query as { id: string };

    const customer = new FindCustomerService();
    const result = await customer.execute({
      id,
    });

    return response.json(result);
  }
}
