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

export default {
  addNewProductService,
};