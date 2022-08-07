import { Request, Response } from 'express';

import { FindOrganizationProjectsService } from '../services/FindOrganizationProjectsService';

export class FindOrganizationProjectsController {
  async handle(request: Request, response: Response) {
    const { org_id } = request.headers as { org_id: string };

    const orgProjects = new FindOrganizationProjectsService();
    const result = await orgProjects.execute({
      org_id,
    });

    return response.json(result);
  }
}
