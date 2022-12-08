"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidRefreshToken = void 0;
const HttpException_1 = __importDefault(require("./HttpException"));
class InvalidRefreshToken extends HttpException_1.default {
    constructor(message = 'Invalid refresh token') {
        super(401, message);
    }
}
exports.InvalidRefreshToken = InvalidRefreshToken;
