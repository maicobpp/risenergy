import { prisma } from '../../database/prismaClient';
import { IUnit, IUnitID } from '../interfaces/IUnits';

export class UnitService {
  async store({
    id, name, number, orientation, inclination, fixed_cost, last_bill, minimun_charge, customer_id, data_id,
  }: IUnit) {
    const unit = await prisma.units.upsert({
      where: {
        id,
      },
      update: {
        name,
        number,
        orientation,
        inclination,
        fixed_cost,
        last_bill,
        minimun_charge,
        customer_id,
        data_id,
      },
      create: {
        name,
        number,
        orientation,
        inclination,
        fixed_cost,
        last_bill,
        minimun_charge,
        customer_id,
        data_id,
      },
    });

    return unit;
  }

  async delete({ id }: IUnitID) {
    const unit = await prisma.units.delete({
      where: {
        id,
      },
    });

    return unit;
  }
}
