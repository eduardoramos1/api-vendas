import { Request, Response } from 'express';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

export default class UserAvatarController {
  public async update(req: Request, res: Response): Promise<Response> {
    const updateAvatarService = new UpdateUserAvatarService();

    const user = updateAvatarService.execute({
      userId: req.user.id,
      avatarFileName: req.file?.filename as string,
    });

    return res.json(user);
  }
}
