import { Client } from "pg";
import config from "config";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(__dirname, "../../data/data.json");
const jsonData = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

const dbConfig = config.get<{
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}>("DataSourceOptions");

const insertData = async () => {
  const client = new Client({
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
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    await client.end();
  }
};

export default insertData;
