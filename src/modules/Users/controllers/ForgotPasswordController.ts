import { Request, Response } from 'express';
import SendForgottenPasswordService from '../services/SendForgottenPasswordService';

export default class ForgotPasswordController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const sendForgottenPasswordService = new SendForgottenPasswordService();

    await sendForgottenPasswordService.execute({ email });

    return res.status(204).json();
  }
}
