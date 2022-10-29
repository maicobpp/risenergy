import { prisma } from '../../../database/prismaClient';
import { IOrgID } from '../../organizations/interfaces/IOrgID';

export class ListCustomersService {
  async execute({ id }: IOrgID) {
    const customer = await prisma.customers.findMany({
      where: {
        org_id: id,
      },
    });

    return customer;
  }
}
