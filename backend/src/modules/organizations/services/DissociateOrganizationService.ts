import { prisma } from '../../../database/prismaClient';
import { IUserOrg } from '../interfaces/IUserOrg';

export class DissociateOrganizationService {
  async execute({ org_id, user_id }: IUserOrg) {
    const usersOrgs = await prisma.usersOrganizations.deleteMany({
      where: {
        org_id,
        user_id,
      },
    });

    return usersOrgs;
  }
}
