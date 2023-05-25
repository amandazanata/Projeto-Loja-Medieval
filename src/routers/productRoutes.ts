import { Router } from 'express';
import productController from '../controllers/product.controller';

const productRouter = Router();

productRouter.post('/products', productController.addNewProduct);
productRouter.get('/products', productController.getAllProducts);

export default productRouter;