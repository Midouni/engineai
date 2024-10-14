"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const configProps = [
    "APP_NAME",
    "API_PREFIX",
    "APP_ENVIRONMENT",
    "DataSourceOptions.type",
    "DataSourceOptions.host",
    "DataSourceOptions.port",
    "DataSourceOptions.username",
    "DataSourceOptions.password",
    "DataSourceOptions.database",
    "DataSourceOptions.synchronize",
    "DataSourceOptions.logging",
    "DataSourceOptions.entities",
    "DataSourceOptions.migrations",
    "DataSourceOptions.subscribers",
];
exports.default = () => {
    const notFoundProp = configProps.find((prop) => !config_1.default.has(prop));
    if (notFoundProp) {
        throw new Error(`${notFoundProp} not found in the environment`);
    }
    return true;
};
