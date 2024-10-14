import config from "config";
import { DataSource, DataSourceOptions } from "typeorm";

const ormConfig: DataSourceOptions = {
  type: config.get<"postgres">("DataSourceOptions.type"),
  host: config.get<string>("DataSourceOptions.host"),
  port: config.get<number>("DataSourceOptions.port"),
  username: config.get<string>("DataSourceOptions.username"),
  password: config.get<string>("DataSourceOptions.password"),
  database: config.get<string>("DataSourceOptions.database"),
  synchronize: config.get<boolean>("DataSourceOptions.synchronize"),
  logging: config.get<boolean>("DataSourceOptions.logging"),
  entities: config.get<string[]>("DataSourceOptions.entities"),
  migrations: config.get<string[]>("DataSourceOptions.migrations"),
  subscribers: config.get<string[]>("DataSourceOptions.subscribers"),
};

const AppDataSource = new DataSource(ormConfig);

export default async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connection established successfully!");
  } catch (error) {
    console.error("Failed to initialize database connection", error);
    throw error;
  }
};
