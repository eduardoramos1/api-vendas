import { Request, Response } from 'express';
import CreateCustomerService from '../services/CreateCustomerService';
import DeleteCustomerService from '../services/DeleteCustomerService';
import ListCustomerService from '../services/ListCustomerService';
import ListOneCustomerService from '../services/ListOneCustomerService';
import UpdateCustomerService from '../services/UpdateCustomerService';

export default class CustomersController {
  public async createCustomer(req: Request, res: Response): Promise<Response> {
    const { email, name } = req.body;
    const createCustomerService = new CreateCustomerService();

    const customer = await createCustomerService.execute({ email, name });

    return res.status(200).json(customer);
  }

  public async deleteCustomer(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteCustomerService = new DeleteCustomerService();

    await deleteCustomerService.execute({ id });

    return res.status(200).json({});
  }

  public async listCustomers(req: Request, res: Response): Promise<Response> {
    const listCustomerService = new ListCustomerService();

    const customers = await listCustomerService.execute();

    return res.status(200).json(customers);
  }

  public async listOneCustomer(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const listOneCustomerService = new ListOneCustomerService();

    const customer = await listOneCustomerService.execute({ id });

    return res.status(200).json(customer);
  }

  public async updateCustomer(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;
    const { id } = req.params;

    const updateCostumerService = new UpdateCustomerService();

    const customer = await updateCostumerService.execute({ id, name, email });

    return res.status(200).json(customer);
  }
}
