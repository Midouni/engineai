"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const typeorm_1 = require("typeorm");
const ormConfig = {
    type: config_1.default.get("DataSourceOptions.type"),
    host: config_1.default.get("DataSourceOptions.host"),
    port: config_1.default.get("DataSourceOptions.port"),
    username: config_1.default.get("DataSourceOptions.username"),
    password: config_1.default.get("DataSourceOptions.password"),
    database: config_1.default.get("DataSourceOptions.database"),
    synchronize: config_1.default.get("DataSourceOptions.synchronize"),
    logging: config_1.default.get("DataSourceOptions.logging"),
    entities: config_1.default.get("DataSourceOptions.entities"),
    migrations: config_1.default.get("DataSourceOptions.migrations"),
    subscribers: config_1.default.get("DataSourceOptions.subscribers"),
};
const AppDataSource = new typeorm_1.DataSource(ormConfig);
exports.default = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Database connection established successfully!");
    }
    catch (error) {
        console.error("Failed to initialize database connection", error);
        throw error;
    }
};
