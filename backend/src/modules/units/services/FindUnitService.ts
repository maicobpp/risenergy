import { prisma } from '../../../database/prismaClient';
import { IUnitID } from '../interfaces/IUnitID';

export class FindUnitService {
  async execute({ id }: IUnitID) {
    const unit = await prisma.units.findUnique({
      where: {
        id,
      },
      include: {
        data: true,
      },
    });

    return unit;
  }
}
