import { Request, Response } from 'express';

import { FindProjectService } from '../services/FindProjectService';

export class FindProjectController {
  async handle(request: Request, response: Response) {
    const { id } = request.query as { id: string };

    const project = new FindProjectService();
    const result = await project.execute({
      id,
    });

    return response.json(result);
  }
}
