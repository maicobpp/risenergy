import { prisma } from '../../../database/prismaClient';
import { IProjectID } from '../interfaces/IProjectID';

export class FindProjectService {
  async execute({ id }: IProjectID) {
    const project = await prisma.projects.findUnique({
      where: {
        id,
      },
      include: {
        customer: true,
        projectsUnits: {
          include: {
            unit: true,
          },
        },
      },
    });

    return project;
  }
}
