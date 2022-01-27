import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { NumberSchema } from 'joi';
import { verify } from 'jsonwebtoken';

interface JwtToken {
  iat: number;
  exp: number;
  sub: string;
}

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Você não tem permissão para acessar este local.');
  }

  console.log(authHeader);
  const token = authHeader.split(' ')[1];

  // esse trycatch é uma excecão na aplicação, necessário para fazer funcionar o método do jwt a seguir
  try {
    const decodedToken = verify(token, authConfig.jwt.secret);

    // para pegar o id do usuario que foi passado como subject na criação da sessão
    const { sub } = decodedToken as JwtToken;

    req.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Token JWT inválido');
  }
}
