"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
}, { versionKey: false, timestamps: true });
UserSchema.plugin(require('mongoose-autopopulate'));
exports.default = (0, mongoose_1.model)('user', UserSchema);
