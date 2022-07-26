import { Request, Response } from 'express';

import { DeleteUnitService } from '../services/DeleteUnitService';

export class DeleteUnitController {
  async handle(request: Request, response: Response) {
    const { id } = request.query as { id: string };

    const deleteUnit = new DeleteUnitService();
    const result = await deleteUnit.execute({
      id,
    });

    return response.json(result);
  }
}
