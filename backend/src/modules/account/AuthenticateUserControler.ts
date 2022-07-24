import { Request, Response } from 'express';

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { company } = request.headers;
    console.log(request.headers.company);
    console.log(company);

    const { email, password } = request.body;

    const authenticateUserUseCase = new AuthenticateUserUseCase();
    const result = await authenticateUserUseCase.execute({
      email,
      password,
    });

    return response.json(result);
  }
}
