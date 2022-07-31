import { Request, Response } from 'express';

import { CustomerService } from '../services/CustomerService';

export class CustomerController {
  async store(request: Request, response: Response) {
    const { org_id } = request.headers as { org_id : string};
    const {
      id, name, email, phone,
    } = request.body;

    const storeCustomer = new CustomerService();
    const result = await storeCustomer.store({
      id,
      name,
      email,
      phone,
      org_id,
    });

    return response.json(result);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.body;

    const storeCustomer = new CustomerService();
    const result = await storeCustomer.delete({
      id,
    });

    return response.json(result);
  }
}
