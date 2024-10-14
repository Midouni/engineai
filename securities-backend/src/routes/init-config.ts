import config from "config";

const configProps = [
  "APP_NAME",
  "API_PREFIX",
  "APP_ENVIRONMENT",
  "DataSourceOptions.type",
  "DataSourceOptions.host",
  "DataSourceOptions.port",
  "DataSourceOptions.username",
  "DataSourceOptions.password",
  "DataSourceOptions.database",
  "DataSourceOptions.synchronize",
  "DataSourceOptions.logging",
  "DataSourceOptions.entities",
  "DataSourceOptions.migrations",
  "DataSourceOptions.subscribers",
];

export default () => {
  const notFoundProp = configProps.find((prop) => !config.has(prop));
  if (notFoundProp) {
    throw new Error(`${notFoundProp} not found in the environment`);
  }
  return true;
};
