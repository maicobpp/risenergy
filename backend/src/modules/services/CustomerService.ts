import { prisma } from '../../database/prismaClient';
import { ICustomer, ICustomerID } from '../interfaces/ICustomers';

export class CustomerService {
  async store({
    id, name, email, phone, org_id,
  }: ICustomer) {
    const customer = await prisma.customers.upsert({
      where: {
        id,
      },
      update: {
        name,
        email,
        phone,
      },
      create: {
        name,
        email,
        phone,
        org_id,
      },
    });

    return customer;
  }

  async delete({ id }: ICustomerID) {
    const customer = await prisma.customers.delete({
      where: {
        id,
      },
    });

    return customer;
  }
}
