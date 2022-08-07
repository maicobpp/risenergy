import { prisma } from '../../../database/prismaClient';
import { ICustomerID } from '../interfaces/ICustomerID';

export class DeleteCustomerService {
  async execute({ id }: ICustomerID) {
    const customer = await prisma.customers.delete({
      where: {
        id,
      },
    });

    return customer;
  }
}
