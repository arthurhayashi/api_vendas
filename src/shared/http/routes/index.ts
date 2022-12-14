import productRouter from "@modules/products/routes/products.routes";
import { Router } from "express";

const routes = Router();
// Redireciona para products router quando chamado
routes.use('/products', productRouter);

export default routes;