import { prisma } from '../../../database/prismaClient';
import { IUnitID } from '../interfaces/IUnitID';

export class DeleteUnitService {
  async execute({ id }: IUnitID) {
    const unit = await prisma.units.delete({
      where: {
        id,
      },
    });

    return unit;
  }
}
