import { Request, Response } from 'express';
import productService from '../services/product.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const addNewProduct = async (req: Request, res: Response) => {
  const serviceResponse = await productService.addNewProductService(req.body);

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  const { id, name, price } = serviceResponse.data;

  return res.status(201).json({ id, name, price });
};

const getAllProducts = async (_req: Request, res: Response) => {
  const serviceResponse = await productService.getAllProductsService();

  return res.status(200).json(serviceResponse);
};

export default {
  addNewProduct,
  getAllProducts,
};