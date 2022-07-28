import { prisma } from '../../database/prismaClient';
import { IUserOrgs, IUsersOrgs } from '../interfaces/IUsersOrgs';

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

  async dissociate({ org_id, user_id }: IUsersOrgs) {
    const usersOrgs = await prisma.usersOrganizations.deleteMany({
      where: {
        org_id,
        user_id,
      },
    });

    return usersOrgs;
  }

  async userOrgs({ user_id }: IUserOrgs) {
    const userOrgs = await prisma.usersOrganizations.findMany({
      where: {
        user_id,
      },
      include: {
        organization: true,
      },
    });

    return userOrgs;
  }

  async userOrg({ org_id, user_id }: IUsersOrgs) {
    const userOrgs = await prisma.usersOrganizations.findMany({
      where: {
        org_id,
        user_id,
      },
      include: {
        organization: true,
      },
    });

    return userOrgs;
  }
}
