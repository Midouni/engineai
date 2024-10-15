"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = __importDefault(require("config"));
const http_status_codes_1 = require("http-status-codes");
const dbConfig = config_1.default.get("DataSourceOptions");
const connectToDatabase = async () => {
    const client = new pg_1.Client({
        user: dbConfig.username,
        host: dbConfig.host,
        database: dbConfig.database,
        password: dbConfig.password,
        port: dbConfig.port,
    });
    await client.connect();
    return client;
};
const SecurityController = {
    // Get all securities with total count
    getSecurities: async (req, res) => {
        const client = await connectToDatabase();
        const limit = parseInt(req.query.limit) || 5;
        const offset = parseInt(req.query.offset) || 0;
        try {
            // First query to get the total count of securities
            const totalResult = await client.query("SELECT COUNT(*) FROM securities");
            const total = parseInt(totalResult.rows[0].count);
            // Second query to get the paginated data
            const result = await client.query("SELECT ticker, security_name , sector , country , trend  FROM securities LIMIT $1 OFFSET $2", [limit, offset]);
            res.status(http_status_codes_1.StatusCodes.OK).json({
                total,
                data: result.rows,
            });
        }
        catch (error) {
            res
                .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ message: "Failed to fetch securities", error });
        }
        finally {
            await client.end();
        }
    },
    // Get details of a single security
    getSecurityDetail: async (req, res) => {
        const { ticker } = req.params;
        const client = await connectToDatabase();
        try {
            const result = await client.query(`SELECT * FROM securities WHERE ticker = $1`, [ticker]);
            if (result.rows.length === 0) {
                res
                    .status(http_status_codes_1.StatusCodes.NOT_FOUND)
                    .json({ message: "Security not found" });
            }
            else {
                res.status(http_status_codes_1.StatusCodes.OK).json(result.rows[0]);
            }
        }
        catch (error) {
            res
                .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ message: "Failed to fetch security details", error });
        }
        finally {
            await client.end();
        }
    },
};
exports.default = SecurityController;
