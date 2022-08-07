import { prisma } from '../../../database/prismaClient';
import { IProjectOrg } from '../interfaces/IProjectOrg';

export class FindOrganizationProjectsService {
  async execute({ org_id }: IProjectOrg) {
    const projects = await prisma.projects.findMany({
      where: {
        org_id,
      },
      include: {
        customer: true,
      },
    });

    return projects;
  }
}
