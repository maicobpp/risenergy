import { prisma } from '../../database/prismaClient';
import { IProjects, IProjectsID } from '../interfaces/IProjects';

export class ProjectService {
  async store({
    id, date, status, customer_id, org_id,
  }: IProjects) {
    const project = await prisma.projects.upsert({
      where: {
        id,
      },
      update: {
        date,
        status,
        customer_id,
      },
      create: {
        date,
        status,
        customer_id,
        org_id,
      },
    });

    return project;
  }

  async delete({ id }: IProjectsID) {
    const project = await prisma.projects.delete({
      where: {
        id,
      },
    });

    return project;
  }
}
