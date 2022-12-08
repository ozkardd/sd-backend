"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidAccessToken = void 0;
const HttpException_1 = __importDefault(require("./HttpException"));
class InvalidAccessToken extends HttpException_1.default {
    constructor(message = 'Invalid access token') {
        super(401, message);
    }
}
exports.InvalidAccessToken = InvalidAccessToken;
