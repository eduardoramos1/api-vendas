import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomerRepository from '../typeorm/repositories/CustomerRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
}

export default class UpdateCustomerService {
  public async execute({ name, email, id }: IRequest): Promise<Customer> {
    const customerRepository = getCustomRepository(CustomerRepository);

    const customer = await customerRepository.findById(id);

    if (!customer) throw new AppError('Cliente não existe', 404);

    const emailExists = await customerRepository.findByEmail(email);

    if (emailExists && email !== customer.email)
      throw new AppError('Este email já foi cadastrado para outro cliente');

    customer.name = name;
    customer.email = email;

    await customerRepository.save(customer);

    return customer;
  }
}
