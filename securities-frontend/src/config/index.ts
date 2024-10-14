const environment = {
  isLocal: true,
  isDevelopment: false,
  isProduction: false,
};

const urls = {
  local: "http://localhost:3021",
  production: "",
  development: "",
};

export const DOMAIN = environment.isLocal
  ? urls.local
  : environment.isDevelopment
  ? urls.development
  : urls.production;

export const api_version = "v1";
