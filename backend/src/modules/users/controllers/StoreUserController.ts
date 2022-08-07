import { Request, Response } from 'express';

import { StoreUserService } from '../services/StoreUserService';

export class StoreUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const storeUser = new StoreUserService();
    const result = await storeUser.execute({
      name,
      email,
      password,
    });

    return response.json(result);
  }
}
