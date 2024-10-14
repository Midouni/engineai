"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = exports.notFoundError = void 0;
const not_found_error_1 = __importDefault(require("./not-found-error"));
exports.notFoundError = not_found_error_1.default;
const error_handler_1 = __importDefault(require("./error-handler"));
exports.errorHandlerMiddleware = error_handler_1.default;
