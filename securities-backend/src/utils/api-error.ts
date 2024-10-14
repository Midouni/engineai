import { StatusCodes } from "http-status-codes";

/* eslint-disable max-classes-per-file */

class APIError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;

    Object.setPrototypeOf(this, APIError.prototype);
  }
}

// Derived error classes
class BadRequestError extends APIError {
  constructor(message = "Bad Request") {
    super(StatusCodes.BAD_REQUEST, message);
  }
}

class AccessDeniedError extends APIError {
  constructor(message = "Access Denied") {
    super(StatusCodes.UNAUTHORIZED, message);
  }
}

class UnauthorizedError extends APIError {
  constructor(message = "Unauthorized") {
    super(StatusCodes.UNAUTHORIZED, message);
  }
}

class ForbiddenError extends APIError {
  constructor(message = "Forbidden") {
    super(StatusCodes.FORBIDDEN, message);
  }
}

class NotFoundError extends APIError {
  constructor(message = "Not Found") {
    super(StatusCodes.NOT_FOUND, message);
  }
}

class MethodNotAllowedError extends APIError {
  constructor(message = "Method Not Allowed") {
    super(StatusCodes.METHOD_NOT_ALLOWED, message);
  }
}

class ConflictError extends APIError {
  constructor(message = "Conflict") {
    super(StatusCodes.CONFLICT, message);
  }
}

class UnSupportedMediaTypeError extends APIError {
  constructor(message = "Unsupported Media Type") {
    super(StatusCodes.UNSUPPORTED_MEDIA_TYPE, message);
  }
}

class UnProcessableEntityError extends APIError {
  constructor(message = "Unprocessable Entity") {
    super(StatusCodes.UNPROCESSABLE_ENTITY, message);
  }
}

class InternalServerError extends APIError {
  constructor(message = "Internal Server Error") {
    super(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }
}

class UnhandleServerError extends APIError {
  constructor(message = "Internal Server Error") {
    super(StatusCodes.SERVICE_UNAVAILABLE, message);
  }
}

export {
  APIError,
  ConflictError,
  ForbiddenError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  AccessDeniedError,
  InternalServerError,
  MethodNotAllowedError,
  UnProcessableEntityError,
  UnhandleServerError,
  UnSupportedMediaTypeError,
};
