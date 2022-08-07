import { prisma } from '../../../database/prismaClient';
import { IOrgID } from '../interfaces/IOrgID';

export class DeleteOrganizationService {
  async execute({ id }: IOrgID) {
    const organization = await prisma.organizations.delete({
      where: {
        id,
      },
    });

    return organization;
  }
}
