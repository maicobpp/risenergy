import { Request, Response } from 'express';

import { ProjectService } from '../services/ProjectService';

export class ProjectController {
  async store(request: Request, response: Response) {
    const { org_id } = request.headers as { org_id : string};
    const {
      id, date, status, customer_id,
    } = request.body;

    const storeProjects = new ProjectService();
    const result = await storeProjects.store({
      id,
      date,
      status,
      customer_id,
      org_id,
    });

    return response.json(result);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.body;

    const storeProjects = new ProjectService();
    const result = await storeProjects.delete({
      id,
    });

    return response.json(result);
  }
}
