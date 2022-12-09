"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const business_routes_1 = __importDefault(require("./business.routes"));
const exceptions_1 = require("../exceptions");
const router = (0, express_1.Router)();
router.use('/users', user_routes_1.default);
router.use('/business', business_routes_1.default);
router.use('*', (_req, _res, next) => {
    return next(new exceptions_1.NotFoundException('This route does not exist'));
});
exports.default = router;
