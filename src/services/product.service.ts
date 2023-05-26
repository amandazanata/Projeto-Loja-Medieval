import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

const addNewProductService = async (
  product: ProductInputtableTypes,
): Promise<ServiceResponse<Product>> => {
  const createdProduct = await ProductModel.create(product);

  const responseService: ServiceResponse<Product> = { 
    status: 'SUCCESSFUL', data: createdProduct.dataValues };
    
  return responseService;
};

const getAllProductsService = async (): Promise<unknown[]> => {
  const allProducts = await ProductModel.findAll();

  return allProducts;
};

export default {
  addNewProductService,
  getAllProductsService,
};