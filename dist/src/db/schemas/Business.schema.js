"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BusinessSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    acronym: {
        type: String,
        required: false,
        default: ''
    },
    description: {
        type: String,
        required: false,
        default: ''
    },
    services: {
        type: [{
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
            }],
        default: [],
        autopopulate: true,
    }
});
BusinessSchema.plugin(require('mongoose-autopopulate'));
exports.default = (0, mongoose_1.model)('business', BusinessSchema);
