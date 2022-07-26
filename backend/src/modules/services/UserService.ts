import { hash } from 'bcrypt';

import { prisma } from '../../database/prismaClient';
import { ICreateUser } from '../interfaces/IUsers';

export class UserService {
  async store({ name, email, password }: ICreateUser) {
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
