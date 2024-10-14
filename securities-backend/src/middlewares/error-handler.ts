import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { APIError } from "../utils/api-error";

interface CustomError {
  statusCode: number;
  message: string;
}

const errorHandlerMiddleware = (
  err: APIError | Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err);

  const customError: CustomError = {
    statusCode: (err as APIError).status || StatusCodes.INTERNAL_SERVER_ERROR,
    message:
      err.message || "Internal server error, please contact support team",
  };

  res.status(customError.statusCode).json(customError);
};

export default errorHandlerMiddleware;
