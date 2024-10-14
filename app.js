import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import {productsRouter} from './src/routes/products.routes.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));


// Routes
app.use('/products', productsRouter);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});