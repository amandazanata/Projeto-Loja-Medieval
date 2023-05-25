import express from 'express';
import productRouter from './routers/productRoutes';

const app = express();

app.use(express.json());
app.use(productRouter);

export default app;
