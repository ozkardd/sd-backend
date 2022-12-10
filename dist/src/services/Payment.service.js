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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPayments = exports.RegisterPayment = void 0;
const exceptions_1 = require("../exceptions");
const Payment_schema_1 = __importDefault(require("../db/schemas/Payment.schema"));
const RegisterPayment = (paymentInfo, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //should validate if id's exists but nodeJs's callbacks get f*** 
        return yield Payment_schema_1.default.create({
            userId: paymentInfo.userId,
            businessId: paymentInfo.businessId,
            serviceId: paymentInfo.serviceId,
            state: "PROCESADO",
            amount: paymentInfo.amount,
            concept: paymentInfo.concept
        });
    }
    catch (e) {
        return next(new exceptions_1.InternalServerException(`There was an unexpected error with the RegisterPayment service. ${e.message}`));
    }
});
exports.RegisterPayment = RegisterPayment;
const GetAllPayments = (next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Payment_schema_1.default.find({});
    }
    catch (e) {
        return next(new exceptions_1.InternalServerException(`There was an unexpected error with the GetAllPayments service. ${e.message}`));
    }
});
exports.GetAllPayments = GetAllPayments;
