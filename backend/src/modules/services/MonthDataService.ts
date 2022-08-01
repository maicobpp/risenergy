import { prisma } from '../../database/prismaClient';
import { IMonthData, IMonthDataID } from '../interfaces/IMonthData';

export class MonthDataService {
  async store({
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

  async delete({ id }: IMonthDataID) {
    const monthData = await prisma.monthsData.delete({
      where: {
        id,
      },
    });

    return monthData;
  }
}
