import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { prisma } from '../../../database/prismaClient';
import { IAuthenticate } from '../interfaces/IAuthenticate';

export class AuthenticationService {
  async execute({ email, password }: IAuthenticate) {
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
      expiresIn: '30d',
    });

    return token;
  }
}
