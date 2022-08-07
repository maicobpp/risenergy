import { Request, Response } from 'express';

import { StoreUnitService } from '../services/StoreUnitService';

export class StoreUnitController {
  async handle(request: Request, response: Response) {
    const {
      id, name, number, orientation, inclination, fixed_cost, last_bill, minimun_charge, customer_id, data_id,
    } = request.body;

    const storeUnit = new StoreUnitService();
    const result = await storeUnit.execute({
      id,
      name,
      number,
      orientation,
      inclination,
      fixed_cost,
      last_bill,
      minimun_charge,
      customer_id,
      data_id,
    });

    return response.json(result);
  }
}
