"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const config_1 = require("./config");
const passport_1 = __importDefault(require("passport"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const app = (0, express_1.default)();
if (config_1.envConfig.NODE_ENV === 'development') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}
app.use(express_1.default.urlencoded({ extended: true, limit: '25mb' }));
app.use(express_1.default.json({ limit: '25mb' }));
app.use((0, cors_1.default)(config_1.corsOptions));
app.use((0, cookie_parser_1.default)());
app.use((0, helmet_1.default)());
app.use(passport_1.default.initialize());
app.use('/grogupay/api', index_routes_1.default);
exports.default = app;
