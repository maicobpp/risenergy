import { Request, Response } from 'express';

import { ListUserOrgsService } from '../services/ListUserOrgsService';

export class ListUserOrgsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const userOrgs = new ListUserOrgsService();
    const result = await userOrgs.execute({
      user_id,
    });

    return response.json(result);
  }
}
