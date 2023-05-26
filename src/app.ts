import express from 'express';
import productRouter from './routers/productRoutes';
import orderRouter from './routers/orderRoutes';
import loginRouter from './routers/loginRoutes';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(orderRouter);
app.use(loginRouter);

export default app;
