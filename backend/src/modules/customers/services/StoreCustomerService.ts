import { prisma } from '../../../database/prismaClient';
import { ICustomer } from '../interfaces/ICustomer';

export class StoreCustomerService {
  async execute({
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
}
