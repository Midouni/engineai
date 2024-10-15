const environment = {
  isLocal: false,
  isDevelopment: false,
  isProduction: true,
};

const urls = {
  local: "http://localhost:3021",
  production: "http://13.38.42.252",
  development: "",
};

export const DOMAIN = environment.isLocal
  ? urls.local
  : environment.isDevelopment
  ? urls.development
  : urls.production;

export const api_version = "v1";
