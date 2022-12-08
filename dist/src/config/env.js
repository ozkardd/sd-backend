"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.envConfig = {
    NODE_ENV: process.env.NODE_ENV,
    MONGODB_PRODUCTION_URI: process.env.MONGODB_PRODUCTION_URI,
    REDIRECT_URL_PRODUCTION: process.env.REDIRECT_URL_PRODUCTION,
};
