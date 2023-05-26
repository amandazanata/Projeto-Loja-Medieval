import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';
// import { ServiceResponse } from '../types/ServiceResponse';

const getProductByOrderId = async (orderId: number): Promise<number[]> => {
  const product = await ProductModel.findAll({ where: { orderId } });
  
  return product.map((el) => el.dataValues.id);
};

const getAllOrdersService = async (): Promise<Order[]> => {
  const allOrders = await OrderModel.findAll();

  const allOrdersWithProducts = allOrders.map(async (el) => ({
    ...el.dataValues,
    productIds: await getProductByOrderId(el.dataValues.id),
  }));
  
  const allOrdersWithProductsReturn = await Promise.all(allOrdersWithProducts);
  
  return allOrdersWithProductsReturn;
};

export default {
  getAllOrdersService,
};