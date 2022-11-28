import 'reflect-metadata'; //primeira linha sempre
import AppError from '@shaded/errors/AppError';
import cors from 'cors';
import express, { NextFunction, Request, request, Response, response } from 'express';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use((error : Error, request:Request, responde:Response,next:NextFunction) =>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: 'error',
            message:error.message
        });
    }
    return response.status(500).json({
        status:"error",
        message :"Internal Serve Error",
    });
} )

app.listen(3333,()=>{
    console.log('server started on port 3333!');
})