import { Request, Response } from 'express';

import { ProjectService } from '../services/ProjectService';

export class ProjectController {
  async store(request: Request, response: Response) {
    const { org_id } = request.headers as { org_id: string };
    const {
      id, date, status, customer_id,
    } = request.body;

    const storeProjects = new ProjectService();
    const result = await storeProjects.store({
      id,
      date: new Date(date),
      status,
      customer_id,
      org_id,
    });

    return response.json(result);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.body;

    const deleteProjects = new ProjectService();
    const result = await deleteProjects.delete({
      id,
    });

    return response.json(result);
  }

  async getOrgProjects(request: Request, response: Response) {
    const { org_id } = request.headers as { org_id: string };

    const orgProjects = new ProjectService();
    const result = await orgProjects.orgProjects({
      org_id,
    });

    return response.json(result);
  }
}
