import express from 'express';
import productRouter from './routers/productRoutes';
import orderRouter from './routers/orderRoutes';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(orderRouter);

export default app;
