"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ServiceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        default: ''
    }
});
ServiceSchema.plugin(require('mongoose-autopopulate'));
exports.default = (0, mongoose_1.model)('service', ServiceSchema);
