import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import {errorHandler} from './middlewares/error.middleware.js';
import userRoutes from './routes/user.routes.js';

const app=express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.get('/health',(req,res)=>{
    res.status(200).json({message:'ok'});
})
app.use('/api/users',userRoutes);
app.use(errorHandler);
export default app;