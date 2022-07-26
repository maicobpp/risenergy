import { prisma } from '../../database/prismaClient';
import { IUsersOrgs } from '../interfaces/IOrganizations';

export class UsersOrgsService {
  async associate({ org_id, user_id }: IUsersOrgs) {
    const usersOrgs = await prisma.usersOrganizations.create({
      data: {
        org_id,
        user_id,
      },
    });

    return usersOrgs;
  }
}
