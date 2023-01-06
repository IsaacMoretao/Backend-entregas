import { Request, Response } from 'express';
import { AutenticateDelivermanUseCase } from './AuthenticateDeliverymanUseCase';

export class AuthenticateDelivermanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const autenticateDelivermanUseCase = new AutenticateDelivermanUseCase();
    const result = await autenticateDelivermanUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}