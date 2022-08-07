import { prisma } from '../../../database/prismaClient';
import { IMonthDataID } from '../interfaces/IMonthDataID';

export class DeleteMonthDataService {
  async execute({ id }: IMonthDataID) {
    const monthData = await prisma.monthsData.delete({
      where: {
        id,
      },
    });

    return monthData;
  }
}
