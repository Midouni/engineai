"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnSupportedMediaTypeError = exports.UnhandleServerError = exports.UnProcessableEntityError = exports.MethodNotAllowedError = exports.InternalServerError = exports.AccessDeniedError = exports.UnauthorizedError = exports.BadRequestError = exports.NotFoundError = exports.ForbiddenError = exports.ConflictError = exports.APIError = void 0;
const http_status_codes_1 = require("http-status-codes");
/* eslint-disable max-classes-per-file */
class APIError extends Error {
    status;
    constructor(status, message) {
        super(message);
        this.status = status;
        Object.setPrototypeOf(this, APIError.prototype);
    }
}
exports.APIError = APIError;
// Derived error classes
class BadRequestError extends APIError {
    constructor(message = "Bad Request") {
        super(http_status_codes_1.StatusCodes.BAD_REQUEST, message);
    }
}
exports.BadRequestError = BadRequestError;
class AccessDeniedError extends APIError {
    constructor(message = "Access Denied") {
        super(http_status_codes_1.StatusCodes.UNAUTHORIZED, message);
    }
}
exports.AccessDeniedError = AccessDeniedError;
class UnauthorizedError extends APIError {
    constructor(message = "Unauthorized") {
        super(http_status_codes_1.StatusCodes.UNAUTHORIZED, message);
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends APIError {
    constructor(message = "Forbidden") {
        super(http_status_codes_1.StatusCodes.FORBIDDEN, message);
    }
}
exports.ForbiddenError = ForbiddenError;
class NotFoundError extends APIError {
    constructor(message = "Not Found") {
        super(http_status_codes_1.StatusCodes.NOT_FOUND, message);
    }
}
exports.NotFoundError = NotFoundError;
class MethodNotAllowedError extends APIError {
    constructor(message = "Method Not Allowed") {
        super(http_status_codes_1.StatusCodes.METHOD_NOT_ALLOWED, message);
    }
}
exports.MethodNotAllowedError = MethodNotAllowedError;
class ConflictError extends APIError {
    constructor(message = "Conflict") {
        super(http_status_codes_1.StatusCodes.CONFLICT, message);
    }
}
exports.ConflictError = ConflictError;
class UnSupportedMediaTypeError extends APIError {
    constructor(message = "Unsupported Media Type") {
        super(http_status_codes_1.StatusCodes.UNSUPPORTED_MEDIA_TYPE, message);
    }
}
exports.UnSupportedMediaTypeError = UnSupportedMediaTypeError;
class UnProcessableEntityError extends APIError {
    constructor(message = "Unprocessable Entity") {
        super(http_status_codes_1.StatusCodes.UNPROCESSABLE_ENTITY, message);
    }
}
exports.UnProcessableEntityError = UnProcessableEntityError;
class InternalServerError extends APIError {
    constructor(message = "Internal Server Error") {
        super(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, message);
    }
}
exports.InternalServerError = InternalServerError;
class UnhandleServerError extends APIError {
    constructor(message = "Internal Server Error") {
        super(http_status_codes_1.StatusCodes.SERVICE_UNAVAILABLE, message);
    }
}
exports.UnhandleServerError = UnhandleServerError;
