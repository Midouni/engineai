import { Client } from "pg";
import config from "config";

const dbConfig = config.get<{
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}>("DataSourceOptions");

const createTable = async () => {
  const client = new Client({
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
  } catch (err) {
    console.error("Error creating table:", err);
  } finally {
    await client.end();
  }
};

export default createTable;
