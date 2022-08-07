import { prisma } from '../../../database/prismaClient';
import { IUserID } from '../interfaces/IUserID';

export class FindUserOrgsService {
  async execute({ user_id }: IUserID) {
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
}
