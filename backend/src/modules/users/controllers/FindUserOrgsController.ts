import { Request, Response } from 'express';

import { FindUserOrgsService } from '../services/FindUserOrgsService';

export class FindUserOrgsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const userOrgs = new FindUserOrgsService();
    const result = await userOrgs.execute({
      user_id,
    });

    return response.json(result);
  }
}
