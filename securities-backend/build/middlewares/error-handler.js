"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(err);
    const customError = {
        statusCode: err.status || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || "Internal server error, please contact support team",
    };
    res.status(customError.statusCode).json(customError);
};
exports.default = errorHandlerMiddleware;
