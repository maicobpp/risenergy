import { prisma } from '../../database/prismaClient';
import { IOrganization, IOrgID } from '../interfaces/IOrganizations';
import { UsersOrgsService } from './UsersOrgsService';

export class OrganizationService {
  async store({ name, user_id }: IOrganization) {
    const organization = await prisma.organizations.create({
      data: {
        name,
      },
    });

    if (organization) {
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
