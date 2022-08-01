import { Request, Response } from 'express';

import { MonthDataService } from '../services/MonthDataService';

export class MonthDataController {
  async store(request: Request, response: Response) {
    const {
      id, january, february, march, april, may, june, july, august, september, october, november, december,
    } = request.body;

    const storeMonthData = new MonthDataService();
    const result = await storeMonthData.store({
      id,
      january,
      february,
      march,
      april,
      may,
      june,
      july,
      august,
      september,
      october,
      november,
      december,
    });

    return response.json(result);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.body;

    const storeMonthData = new MonthDataService();
    const result = await storeMonthData.delete({
      id,
    });

    return response.json(result);
  }
}
