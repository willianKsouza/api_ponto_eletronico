import { Request, Response, NextFunction } from "express";
import { apiError } from "../helpers/apiErrors";

export const errorMiddleware = (
  err: Partial<apiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode ?? 500

  const errorMessage = err.statusCode ? err.message : 'Internal Server Error'


  return res.status(statusCode).json({
    errorMessage,
  });
};
