import { prisma } from '../../database/prismaClient';
import { IOrganization, IOrgID } from '../interfaces/IOrganizations';
import { UsersOrgsService } from './UsersOrgsService';

export class OrganizationService {
  async store({ id, name, user_id }: IOrganization) {
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
      const associateUsersOrgs = new UsersOrgsService();
      await associateUsersOrgs.associate({
        org_id: organization.id,
        user_id,
      });
    }

    return organization;
  }

  async delete({ id }: IOrgID) {
    const organization = await prisma.organizations.delete({
      where: {
        id,
      },
    });

    return organization;
  }
}
