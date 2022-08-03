import { prisma } from '../../database/prismaClient';
import { IProject, IProjectID, IProjectOrg } from '../interfaces/IProjects';

export class ProjectService {
  async store({
    id, date, status, customer_id, city_id, org_id,
  }: IProject) {
    const project = await prisma.projects.upsert({
      where: {
        id,
      },
      update: {
        date,
        status,
        customer_id,
        city_id,
      },
      create: {
        date,
        status,
        customer_id,
        city_id,
        org_id,
      },
    });

    return project;
  }

  async delete({ id }: IProjectID) {
    const project = await prisma.projects.delete({
      where: {
        id,
      },
    });

    return project;
  }

  async orgProjects({ org_id }: IProjectOrg) {
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
