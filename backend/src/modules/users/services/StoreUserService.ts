import { hash } from 'bcrypt';

import { prisma } from '../../../database/prismaClient';
import { IUser } from '../interfaces/IUser';

export class StoreUserService {
  async execute({ name, email, password }: IUser) {
    const userExist = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (userExist) {
      throw new Error('User already exists');
    }

    const hashPassword = await hash(password, 10);

    const user = await prisma.users.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });

    return user;
  }
}
