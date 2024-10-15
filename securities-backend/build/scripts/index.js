"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createDb_1 = __importDefault(require("./createDb"));
const addData_1 = __importDefault(require("./addData"));
const run = async () => {
    try {
        console.log("Starting the database setup...");
        await (0, createDb_1.default)();
        console.log("Table created successfully.");
        await (0, addData_1.default)();
        console.log("Data inserted successfully.");
        console.log("Script completed successfully!");
    }
    catch (error) {
        console.error("An error occurred during the script execution:");
        console.error(error);
    }
};
run();
