import { Request, Response } from 'express';
import OrderService from '../services/orders.service';
// import mapStatusHTTP from '../utils/mapStatusHTTP';

const getAllOrders = async (_req: Request, res: Response) => {
  const serviceResponse = await OrderService.getAllOrdersService();
  
  return res.status(200).json(serviceResponse);
};

export default {
  getAllOrders,
};