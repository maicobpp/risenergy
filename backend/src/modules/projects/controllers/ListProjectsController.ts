import { Request, Response } from 'express';

import { ListProjectsService } from '../services/ListProjectsService';

export class ListProjectsController {
  async handle(request: Request, response: Response) {
    const { org_id } = request.headers as { org_id: string };

    const projects = new ListProjectsService();
    const result = await projects.execute({
      org_id,
    });

    return response.json(result);
  }
}
