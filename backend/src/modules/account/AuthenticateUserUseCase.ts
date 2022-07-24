import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { prisma } from '../../database/prismaClient';

interface IAuthenticateUser {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUser) {
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error('Invalid user or password!');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Invalid user or password!');
    }

    const token = sign({ email }, 'cbeba195f8f12e45d0ac9ff97f0fa32e', {
      subject: user.id,
      expiresIn: '1d',
    });

    return token;
  }
}
