import { Router } from 'express';

const productsRouter = Router();

// POST /products (create a product)
productsRouter.post('/', (req, res) => {
    console.log(req.body);

    res.status(201).json(req.body);
});

export { productsRouter }; 