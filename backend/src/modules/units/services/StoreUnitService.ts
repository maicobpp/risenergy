import { prisma } from '../../../database/prismaClient';
import { IUnit } from '../interfaces/IUnit';

export class StoreUnitService {
  async execute({
    id, name, number, fixed_cost, last_bill, minimun_charge, customer_id, data_id,
  }: IUnit) {
    const unit = await prisma.units.upsert({
      where: {
        id,
      },
      update: {
        name,
        number,
        fixed_cost,
        last_bill,
        minimun_charge,
        customer_id,
        data_id,
      },
      create: {
        name,
        number,
        fixed_cost,
        last_bill,
        minimun_charge,
        customer_id,
        data_id,
      },
    });

    return unit;
  }
}
