import { prisma } from '../../../database/prismaClient';
import { IUserOrg } from '../interfaces/IUserOrg';

export class AssociateOrganizationService {
  async execute({ org_id, user_id }: IUserOrg) {
    const usersOrgs = await prisma.usersOrganizations.create({
      data: {
        org_id,
        user_id,
      },
    });

    return usersOrgs;
  }
}
