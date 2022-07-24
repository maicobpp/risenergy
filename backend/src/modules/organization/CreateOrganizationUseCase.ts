import { prisma } from '../../database/prismaClient';

interface ICreateOrganization {
  name: string;
}

export class CreateOrganizationUseCase {
  async execute({ name }: ICreateOrganization) {
    const organization = await prisma.organizations.create({
      data: {
        name,
      },
    });

    return organization;
  }
}
