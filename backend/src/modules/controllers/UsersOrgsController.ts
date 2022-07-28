import { Request, Response } from 'express';

import { UsersOrgsService } from '../services/UsersOrgsService';

export class UsersOrgsController {
  async associate(request: Request, response: Response) {
    // const { org_id } = request.headers as { org_id: string };
    const { org_id } = request.body;
    const { user_id } = request;

    const associateUsersOrgs = new UsersOrgsService();
    const result = await associateUsersOrgs.associate({
      org_id,
      user_id,
    });

    return response.json(result);
  }

  async dissociate(request: Request, response: Response) {
    const { org_id } = request.body;
    const { user_id } = request;

    const dissociateUsersOrgs = new UsersOrgsService();
    const result = await dissociateUsersOrgs.dissociate({
      org_id,
      user_id,
    });

    return response.json(result);
  }

  async getUserOrgs(request: Request, response: Response) {
    const { user_id } = request;

    const userOrgs = new UsersOrgsService();
    const result = await userOrgs.userOrgs({
      user_id,
    });

    return response.json(result);
  }
}
