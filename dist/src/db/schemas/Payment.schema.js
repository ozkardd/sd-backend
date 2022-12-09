"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PaymentSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user"
    },
    businessId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "business"
    },
    serviceId: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    state: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    concept: {
        type: String,
        required: false,
        default: ''
    }
}, { versionKey: false, timestamps: true });
PaymentSchema.plugin(require('mongoose-autopopulate'));
exports.default = (0, mongoose_1.model)('payment', PaymentSchema);
