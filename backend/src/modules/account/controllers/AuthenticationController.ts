import { Request, Response } from 'express';

import { AuthenticationService } from '../services/AuthenticationService';

export class AuthenticationController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticationService();
    const result = await authenticateUser.execute({
      email,
      password,
    });

    return response.json(result);
  }
}
