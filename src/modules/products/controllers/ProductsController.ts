import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProductService';
import DeleteProductService from '../services/DeleteProductService';
import ListOneProductService from '../services/ListOneProductService';
import ListProductService from '../services/ListProductService';
import UpdateProductService from '../services/UpdateProductService';
import Product from '../typeorm/entities/Product';

export default class ProductsController {
  public async listProducts(req: Request, res: Response): Promise<Response> {
    const listProducts = new ListProductService();

    const products = await listProducts.execute();

    return res.json(products);
  }

  public async listOneProduct(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const listOneProduct = new ListOneProductService();

    const product = await listOneProduct.execute({ id });

    return res.json(product);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, price, quantity } = req.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({ name, price, quantity });

    return res.json(product);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, price, quantity } = req.body;

    const updateProduct = new UpdateProductService();
    const product = await updateProduct.execute({ id, name, price, quantity });

    return res.json(product);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteProduct = new DeleteProductService();

    await deleteProduct.execute({ id });

    return res.json([]);
  }
}
