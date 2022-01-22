import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
//  Middleware para tratamento de erro, ao acessar uma rota e caso essa rota gere algum erro, esse middleware irá gerar uma mensagem de erro
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'Error',
      message: error.message,
    });
  }

  // se o erro não for um instancia de AppError, provavalmente é um erro fora da aplicação
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('Servidor iniciado na porta 3333! ༼ つ ◕_◕ ༽つ');
});
