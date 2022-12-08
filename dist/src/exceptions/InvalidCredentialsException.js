"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCredentialsException = void 0;
const HttpException_1 = __importDefault(require("./HttpException"));
class InvalidCredentialsException extends HttpException_1.default {
    constructor(message = 'Invalid email or password') {
        super(400, message);
    }
}
exports.InvalidCredentialsException = InvalidCredentialsException;
