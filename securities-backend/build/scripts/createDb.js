"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = __importDefault(require("config"));
const dbConfig = config_1.default.get("DataSourceOptions");
const createTable = async () => {
    const client = new pg_1.Client({
        user: dbConfig.username,
        host: dbConfig.host,
        database: dbConfig.database,
        password: dbConfig.password,
        port: dbConfig.port,
    });
    await client.connect();
    const dropAndCreateTableQuery = `
    DROP TABLE IF EXISTS securities;

    CREATE TABLE securities (
      id SERIAL PRIMARY KEY,
      ticker VARCHAR(10) UNIQUE NOT NULL,
      security_name VARCHAR(255) NOT NULL,
      sector VARCHAR(100),
      country VARCHAR(100),
      trend FLOAT,
      prices JSONB
    );
  `;
    try {
        await client.query(dropAndCreateTableQuery);
        console.log("Table 'securities' dropped and recreated successfully!");
    }
    catch (err) {
        console.error("Error creating table:", err);
    }
    finally {
        await client.end();
    }
};
exports.default = createTable;
