"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config_1 = __importDefault(require("config"));
const StatusController_1 = __importDefault(require("../controllers/StatusController"));
const SecurityController_1 = __importDefault(require("../controllers/SecurityController"));
const router = (0, express_1.Router)();
router.get("/", StatusController_1.default.appStatus);
router.get(config_1.default.get("API_PREFIX") + "/securities", SecurityController_1.default.getSecurities);
router.get(config_1.default.get("API_PREFIX") + "/securities/:ticker", SecurityController_1.default.getSecurityDetail);
exports.default = (app) => {
    app.use(router);
};
