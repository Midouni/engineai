"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = __importDefault(require("config"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dataFilePath = path_1.default.join(__dirname, "../../data/data.json");
const jsonData = JSON.parse(fs_1.default.readFileSync(dataFilePath, "utf-8"));
const dbConfig = config_1.default.get("DataSourceOptions");
const insertData = async () => {
    const client = new pg_1.Client({
        user: dbConfig.username,
        host: dbConfig.host,
        database: dbConfig.database,
        password: dbConfig.password,
        port: dbConfig.port,
    });
    await client.connect();
    try {
        for (const item of jsonData) {
            const { ticker, securityName, sector, country, trend, prices } = item;
            const query = `
        INSERT INTO securities (ticker, security_name, sector, country, trend, prices)
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (ticker) DO NOTHING;
      `;
            const values = [
                ticker,
                securityName,
                sector,
                country,
                trend,
                JSON.stringify(prices),
            ];
            await client.query(query, values);
        }
        console.log("Data inserted successfully!");
    }
    catch (error) {
        console.error("Error inserting data:", error);
    }
    finally {
        await client.end();
    }
};
exports.default = insertData;
