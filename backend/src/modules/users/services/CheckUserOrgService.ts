import { prisma } from '../../../database/prismaClient';
import { IUserOrg } from '../interfaces/IUserOrg';

export class CheckUserOrgsService {
  async execute({ org_id, user_id }: IUserOrg) {
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
