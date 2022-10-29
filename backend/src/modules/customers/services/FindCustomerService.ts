import { prisma } from '../../../database/prismaClient';
import { ICustomerID } from '../interfaces/ICustomerID';

export class FindCustomerService {
  async execute({ id }: ICustomerID) {
    const customers = await prisma.customers.findUnique({
      where: {
        id,
      },
    });

    return customers;
  }
}
