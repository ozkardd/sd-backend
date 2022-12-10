"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestQueryValidation = void 0;
/* eslint-disable import/prefer-default-export */
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const exceptions_1 = require("../../../exceptions");
function requestQueryValidation(type) {
    return (req, res, next) => {
        (0, class_validator_1.validate)((0, class_transformer_1.plainToClass)(type, req.query)).then((errors) => {
            if (errors.length > 0) {
                const message = errors
                    .map((error) => Object.values(error.constraints))
                    .join(', ');
                next(new exceptions_1.BadRequestException(message.split(', ').map(err => err.trim())));
            }
            else {
                next();
            }
        });
    };
}
exports.requestQueryValidation = requestQueryValidation;
