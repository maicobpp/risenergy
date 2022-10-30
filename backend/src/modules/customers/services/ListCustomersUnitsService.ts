import { prisma } from '../../../database/prismaClient';
import { ICustomerID } from '../interfaces/ICustomerID';

export class ListCustomersUnitsService {
  async execute({ id }: ICustomerID) {
    const units = await prisma.units.findMany({
      where: {
        customer_id: id,
      },
      include: {
        customer: true,
        data: true,
      },
    });

    return units;
  }
}
