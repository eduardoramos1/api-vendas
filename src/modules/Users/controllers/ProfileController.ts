import { Request, Response } from 'express';
import ShowProfileService from '../services/ShowProfileService';
import UpdateProfileService from '../services/UpdateProfileService';

export default class ProfileController {
  public async listOneUser(req: Request, res: Response): Promise<Response> {
    const listOneUser = new ShowProfileService();
    const userId = req.user.id;

    const user = await listOneUser.execute({ userId });

    return res.json(user);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { name, email, password, old_password } = req.body;
    const user_id = req.user.id;

    const updateUser = new UpdateProfileService();

    const user = await updateUser.execute({
      user_id,
      old_password,
      name,
      email,
      password,
    });

    return res.json(user);
  }
}
