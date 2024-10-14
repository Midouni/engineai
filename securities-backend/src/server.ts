import "express-async-errors";
import "reflect-metadata";
import express from "express";
import http from "http";
import cors from "cors";
import helmet from "helmet";
const DEFAULT_PORT = process.env.PORT || 3021;
import connectToDatabase from "./db/connect";
import checkEnvVariables from "./routes/init-config";
import routes from "./routes/index";
import { notFoundError, errorHandlerMiddleware } from "./middlewares";

const app = express();

async function init() {
  app.use(cors());
  app.use(helmet());
  app.use(express.json());

  // load routes and events
  routes(app);

  // load and validate env variables
  checkEnvVariables();

  // error middleware
  app.use(notFoundError); // handle 404 not found error
  app.use(errorHandlerMiddleware); // handle Errors
}

async function run() {
  try {
    init();

    // connect to the database before run the server and start receive request
    await connectToDatabase();

    const server = http.createServer(app);
    server.listen(DEFAULT_PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Engine IA server listening on port:${DEFAULT_PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

run();
