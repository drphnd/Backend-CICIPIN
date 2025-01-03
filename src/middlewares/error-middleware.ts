// error-middleware.ts
import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { ResponseError } from '../errors/response-error';

export const errorMiddleware = async (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (error instanceof ZodError) {
        res.status(400).json({
        errorMessage: 'Validation error: ${JSON.stringify(error.errors)}',
        });
        
    } else if (error instanceof ResponseError) {
        res.status(400).json({
            errorMessage: error.message,
            })
}else{
        res.status(500).json({
            errorMessage: error.message,
            })
}
}

// This middleware checks if the error is a ZodError and if so, it sends a 400 status code with the validation errors. 
//If the error is not a ZodError, it sends a 500 status code with a generic error message.
