import { Request, Response } from 'express';

import { StoreMonthDataService } from '../services/StoreMonthDataService';

export class StoreMonthDataController {
  async handle(request: Request, response: Response) {
    const {
      id, january, february, march, april, may, june, july, august, september, october, november, december,
    } = request.body;

    const storeMonthData = new StoreMonthDataService();
    const result = await storeMonthData.execute({
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
}
