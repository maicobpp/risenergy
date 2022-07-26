import { Request, Response } from 'express';

import { UserService } from '../services/UserService';

export class UserController {
  async store(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const storeUser = new UserService();
    const result = await storeUser.store({
      name,
      email,
      password,
    });

    return response.json(result);
  }
}
