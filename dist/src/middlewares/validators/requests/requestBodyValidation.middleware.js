"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestBodyValidation = void 0;
/* eslint-disable import/prefer-default-export */
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const fs_1 = require("fs");
const util_1 = require("util");
const exceptions_1 = require("../../../exceptions");
const unlinkFile = (0, util_1.promisify)(fs_1.unlink);
function requestBodyValidation(type) {
    return (req, _res, next) => {
        (0, class_validator_1.validate)((0, class_transformer_1.plainToClass)(type, req.body)).then((errors) => __awaiter(this, void 0, void 0, function* () {
            if (errors.length > 0) {
                const message = errors
                    .map((error) => Object.values(error.constraints))
                    .join(', ');
                next(new exceptions_1.BadRequestException(message.split(',').map(err => err.trim())));
            }
            else {
                next();
            }
        }));
    };
}
exports.requestBodyValidation = requestBodyValidation;
