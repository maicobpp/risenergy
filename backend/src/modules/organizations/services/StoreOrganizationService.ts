import { prisma } from '../../../database/prismaClient';
import { IOrganization } from '../interfaces/IOrganization';
import { AssociateOrganizationService } from './AssociateOrganizationService';

export class StoreOrganizationService {
  async execute({ id, name, user_id }: IOrganization) {
    const newOrg = id !== '';
    const organization = await prisma.organizations.upsert({
      where: {
        id,
      },
      update: {
        name,
      },
      create: {
        name,
      },
    });

    if (organization && newOrg) {
      const associateUsersOrgs = new AssociateOrganizationService();
      await associateUsersOrgs.execute({
        org_id: organization.id,
        user_id,
      });
    }

    return organization;
  }
}
