import { prisma } from '../../../database/prismaClient';
import { ICustomer } from '../interfaces/ICustomer';

type TCustomerID = Pick<ICustomer, 'id'>;

export class DeleteCustomerService {
  async execute({ id }: TCustomerID) {
    const customer = await prisma.customers.delete({
      where: {
        id,
      },
    });

    return customer;
  }
}
