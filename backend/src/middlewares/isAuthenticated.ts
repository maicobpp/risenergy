import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export async function isAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  console.log(request.headers);

  if (!authHeader) {
    return response.status(401).json({
      message: 'Token Missing',
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    verify(token, 'cbeba195f8f12e45d0ac9ff97f0fa32e');
    return next();
  } catch (err) {
    return response.status(401).json({
      message: 'Invalid Token',
    });
  }
}
