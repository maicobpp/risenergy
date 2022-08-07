import { Request, Response } from 'express';

import { StoreCustomerService } from '../services/StoreCustomerService';

export class StoreCustomerController {
  async handle(request: Request, response: Response) {
    const { org_id } = request.headers as { org_id : string};
    const {
      id, name, email, phone,
    } = request.body;

    const storeCustomer = new StoreCustomerService();
    const result = await storeCustomer.execute({
      id,
      name,
      email,
      phone,
      org_id,
    });

    return response.json(result);
  }
}
