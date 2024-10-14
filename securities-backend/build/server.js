"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const DEFAULT_PORT = process.env.PORT || 3021;
const connect_1 = __importDefault(require("./db/connect"));
const init_config_1 = __importDefault(require("./routes/init-config"));
const index_1 = __importDefault(require("./routes/index"));
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
async function init() {
    app.use((0, cors_1.default)());
    app.use((0, helmet_1.default)());
    app.use(express_1.default.json());
    // load routes and events
    (0, index_1.default)(app);
    // load and validate env variables
    (0, init_config_1.default)();
    // error middleware
    app.use(middlewares_1.notFoundError); // handle 404 not found error
    app.use(middlewares_1.errorHandlerMiddleware); // handle Errors
}
async function run() {
    try {
        init();
        // connect to the database before run the server and start receive request
        await (0, connect_1.default)();
        const server = http_1.default.createServer(app);
        server.listen(DEFAULT_PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`Engine IA server listening on port:${DEFAULT_PORT}`);
        });
    }
    catch (error) {
        console.error(error);
    }
}
run();
