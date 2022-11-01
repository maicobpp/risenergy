import { Request, Response } from 'express';

import { FindUnitService } from '../services/FindUnitService';

export class FindUnitController {
  async handle(request: Request, response: Response) {
    const { id } = request.query as { id: string };

    const unit = new FindUnitService();
    const result = await unit.execute({
      id,
    });

    return response.json(result);
  }
}
