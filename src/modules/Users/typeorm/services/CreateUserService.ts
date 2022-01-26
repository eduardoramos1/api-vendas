import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../entities/User';
import UsersRepository from '../repositories/UsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExists = usersRepository.findByEmail(email);

    if (email) {
      throw new AppError('Email já existe');
    }

    const user = usersRepository.create({
      name,
      email,
      password,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
