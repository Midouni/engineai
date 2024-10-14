import { Request, Response } from "express";
import { Client } from "pg";
import config from "config";
import { StatusCodes } from "http-status-codes";

const dbConfig = config.get<{
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}>("DataSourceOptions");

const connectToDatabase = async () => {
  const client = new Client({
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
  getSecurities: async (req: Request, res: Response): Promise<void> => {
    const client = await connectToDatabase();
    const limit = parseInt(req.query.limit as string) || 5;
    const offset = parseInt(req.query.offset as string) || 0;

    try {
      // First query to get the total count of securities
      const totalResult = await client.query("SELECT COUNT(*) FROM securities");
      const total = parseInt(totalResult.rows[0].count);

      // Second query to get the paginated data
      const result = await client.query(
        "SELECT ticker, security_name , sector , country , trend  FROM securities LIMIT $1 OFFSET $2",
        [limit, offset]
      );

      res.status(StatusCodes.OK).json({
        total,
        data: result.rows,
      });
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Failed to fetch securities", error });
    } finally {
      await client.end();
    }
  },

  // Get details of a single security
  getSecurityDetail: async (req: Request, res: Response): Promise<void> => {
    const { ticker } = req.params;

    const client = await connectToDatabase();
    try {
      const result = await client.query(
        `SELECT * FROM securities WHERE ticker = $1`,
        [ticker]
      );
      if (result.rows.length === 0) {
        res
          .status(StatusCodes.NOT_FOUND)
          .json({ message: "Security not found" });
      } else {
        res.status(StatusCodes.OK).json(result.rows[0]);
      }
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Failed to fetch security details", error });
    } finally {
      await client.end();
    }
  },
};

export default SecurityController;
