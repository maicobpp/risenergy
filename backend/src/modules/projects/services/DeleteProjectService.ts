import { prisma } from '../../../database/prismaClient';
import { IProjectID } from '../interfaces/IProjectID';

export class DeleteProjectService {
  async execute({ id }: IProjectID) {
    const project = await prisma.projects.delete({
      where: {
        id,
      },
    });

    return project;
  }
}
