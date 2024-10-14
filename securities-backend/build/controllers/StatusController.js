"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const http_status_codes_1 = require("http-status-codes");
const StatusController = {
    /**
     * Handle app status
     * @async
     * @method
     * @returns {Promise.<void> }
     */
    appStatus: async (req, res) => {
        const data = {
            status: "Healthy",
            appName: config_1.default.get("APP_NAME"),
            environment: config_1.default.get("APP_ENVIRONMENT"),
            time: new Date(),
        };
        res.status(http_status_codes_1.StatusCodes.OK).send(data);
    },
};
exports.default = StatusController;
