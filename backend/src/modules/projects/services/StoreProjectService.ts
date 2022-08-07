import { prisma } from '../../../database/prismaClient';
import { IProject } from '../interfaces/IProject';

export class StoreProjectService {
  async execute({
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
}
