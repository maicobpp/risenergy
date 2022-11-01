import { Request, Response } from 'express';

import { StoreMonthDataService } from '../../monthData/services/StoreMonthDataService';
import { StoreUnitService } from '../services/StoreUnitService';

export class StoreUnitController {
  async handle(request: Request, response: Response) {
    const {
      id, name, number, fixed_cost, last_bill, minimun_charge, customer_id, data,
    } = request.body;

    const storeMonthData = new StoreMonthDataService();
    const resultMonthData = await storeMonthData.execute({
      ...data,
    });

    const data_id = resultMonthData.id;

    const storeUnit = new StoreUnitService();
    const result = await storeUnit.execute({
      id,
      name,
      number,
      fixed_cost,
      last_bill,
      minimun_charge,
      customer_id,
      data_id,
    });

    return response.json(result);
  }
}
