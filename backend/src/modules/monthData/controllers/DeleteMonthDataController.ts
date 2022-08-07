import { Request, Response } from 'express';

import { DeleteMonthDataService } from '../services/DeleteMonthDataService';

export class DeleteMonthDataController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const deleteMonthData = new DeleteMonthDataService();
    const result = await deleteMonthData.execute({
      id,
    });

    return response.json(result);
  }
}
