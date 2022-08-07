import { prisma } from '../../../database/prismaClient';
import { IMonthData } from '../interfaces/IMonthData';

export class StoreMonthDataService {
  async execute({
    id, january, february, march, april, may, june, july, august, september, october, november, december,
  }: IMonthData) {
    const monthData = await prisma.monthsData.upsert({
      where: {
        id,
      },
      update: {
        january,
        february,
        march,
        april,
        may,
        june,
        july,
        august,
        september,
        october,
        november,
        december,
      },
      create: {
        january,
        february,
        march,
        april,
        may,
        june,
        july,
        august,
        september,
        october,
        november,
        december,
      },
    });

    return monthData;
  }
}
