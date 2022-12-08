"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
const env_1 = require("./env");
const { NODE_ENV, REDIRECT_URL_PRODUCTION } = env_1.envConfig;
exports.corsOptions = {
    origin: NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : REDIRECT_URL_PRODUCTION,
    credentials: true,
    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE',
        'PATCH',
        'OPTIONS',
    ],
};
