import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export async function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: 'Token Missing',
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(token, 'cbeba195f8f12e45d0ac9ff97f0fa32e') as IPayload;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).json({
      message: 'Invalid Token',
    });
  }
}
