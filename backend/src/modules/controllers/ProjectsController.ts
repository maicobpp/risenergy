import { Request, Response } from 'express';

import { ProjectService } from '../services/ProjectService';

export class ProjectController {
  async store(request: Request, response: Response) {
    const { org_id } = request.headers as { org_id: string };
    const {
      id, date, status, customer_id, city_id,
    } = request.body;

    const storeProject = new ProjectService();
    const result = await storeProject.store({
      id,
      date: new Date(date),
      status,
      customer_id,
      org_id,
      city_id,
    });

    return response.json(result);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.body;

    const deleteProject = new ProjectService();
    const result = await deleteProject.delete({
      id,
    });

    return response.json(result);
  }

  async getOrgProjects(request: Request, response: Response) {
    const { org_id } = request.headers as { org_id: string };

    const orgProject = new ProjectService();
    const result = await orgProject.orgProjects({
      org_id,
    });

    return response.json(result);
  }
}
