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
exports.GetAllServicesUsers = exports.RegisterBusiness = exports.GetAllBusinessServices = void 0;
const exceptions_1 = require("../exceptions");
const Business_schema_1 = __importDefault(require("../db/schemas/Business.schema"));
const Payment_schema_1 = __importDefault(require("../db/schemas/Payment.schema"));
const GetAllBusinessServices = (next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Business_schema_1.default.find({});
    }
    catch (e) {
        return next(new exceptions_1.InternalServerException(`There was an unexpected error with the GetAllBusinessServices service. ${e.message}`));
    }
});
exports.GetAllBusinessServices = GetAllBusinessServices;
const RegisterBusiness = (businessInfo, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Business_schema_1.default.create({
            name: businessInfo.name,
            acronym: businessInfo.acronym,
            description: businessInfo.description,
            services: businessInfo.services
        });
    }
    catch (e) {
        return next(new exceptions_1.InternalServerException(`There was an unexpected error with the RegisterBusiness service. ${e.message}`));
    }
});
exports.RegisterBusiness = RegisterBusiness;
const GetAllServicesUsers = (next, _id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Payment_schema_1.default.find({ businessId: _id });
    }
    catch (e) {
        return next(new exceptions_1.InternalServerException(`There was an unexpected error with the GetAllPayments service. ${e.message}`));
    }
});
exports.GetAllServicesUsers = GetAllServicesUsers;
