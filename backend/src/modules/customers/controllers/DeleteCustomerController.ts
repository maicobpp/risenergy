import { Request, Response } from 'express';

import { DeleteCustomerService } from '../services/DeleteCustomerService';

export class DeleteCustomerController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const deleteCustomer = new DeleteCustomerService();
    const result = await deleteCustomer.execute({
      id,
    });

    return response.json(result);
  }
}
