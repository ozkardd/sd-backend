"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config");
const { NODE_ENV, MONGODB_PRODUCTION_URI } = config_1.envConfig;
if (NODE_ENV === 'development') {
    mongoose_1.default.connect(MONGODB_PRODUCTION_URI, error => error
        ? console.error(error)
        : console.log(`Database connected in ${NODE_ENV} mode`));
}
else if (NODE_ENV === 'production') {
    mongoose_1.default.connect(MONGODB_PRODUCTION_URI, error => error
        ? console.error(error)
        : console.log(`Database connected in ${NODE_ENV} mode`));
}
