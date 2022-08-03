import { Request, Response } from 'express';

import { UnitService } from '../services/UnitService';

export class UnitController {
  async store(request: Request, response: Response) {
    const {
      id, name, number, orientation, inclination, fixed_cost, last_bill, minimun_charge, customer_id, data_id,
    } = request.body;

    const storeUnit = new UnitService();
    const result = await storeUnit.store({
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

  async delete(request: Request, response: Response) {
    const { id } = request.body;

    const deleteUnit = new UnitService();
    const result = await deleteUnit.delete({
      id,
    });

    return response.json(result);
  }
}
