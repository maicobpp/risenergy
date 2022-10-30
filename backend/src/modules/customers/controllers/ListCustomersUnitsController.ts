import { Request, Response } from 'express';

import { ListCustomersUnitsService } from '../services/ListCustomersUnitsService';

export class ListCustomerUnitsController {
  async handle(request: Request, response: Response) {
    const { id } = request.query as { id: string };

    const units = new ListCustomersUnitsService();
    const result = await units.execute({
      id,
    });

    const avgsAdd = result.map((unit) => {
      const avg = (((unit.data.january || 0)
        + (unit.data.february || 0)
        + (unit.data.march || 0)
        + (unit.data.april || 0)
        + (unit.data.may || 0)
        + (unit.data.june || 0)
        + (unit.data.july || 0)
        + (unit.data.august || 0)
        + (unit.data.september || 0)
        + (unit.data.october || 0)
        + (unit.data.november || 0)
        + (unit.data.december || 0)) / 12);
      return { ...unit, avg };
    });

    return response.json(avgsAdd);
  }
}
