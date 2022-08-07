import { Request, Response } from 'express';

import { DeleteProjectService } from '../services/DeleteProjectService';

export class DeleteProjectsController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const deleteProject = new DeleteProjectService();
    const result = await deleteProject.execute({
      id,
    });

    return response.json(result);
  }
}
