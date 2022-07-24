import { Request, Response } from 'express';

import { CreateOrganizationUseCase } from './CreateOrganizationUseCase';

export class CreateOrganizationController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createOrganizationUseCase = new CreateOrganizationUseCase();
    const result = await createOrganizationUseCase.execute({
      name,
    });

    return response.json(result);
  }
}
