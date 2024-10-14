"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handleNotFound;
const api_error_1 = require("../utils/api-error");
async function handleNotFound(req) {
    const errorMessage = `Not Found: ${req.method} on ${req.url}`;
    throw new api_error_1.NotFoundError(errorMessage);
}
