"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.GetAllServicesUsers = exports.RegisterBusiness = exports.GetAllBussinessServices = void 0;
const exceptions_1 = require("../exceptions");
const businessService = __importStar(require("../services/Business.service"));
const GetAllBussinessServices = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businesses = yield businessService.GetAllBusinessServices(next);
        const outDto = {
            data: businesses,
            resultCode: 200,
            message: 'Ok'
        };
        return res
            .status(200)
            .send(outDto);
    }
    catch (e) {
        return next(new exceptions_1.InternalServerException(`There was an unexpected error with the getAllUsers controller. ${e.message}`));
    }
});
exports.GetAllBussinessServices = GetAllBussinessServices;
const RegisterBusiness = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const businessInfo = _req.body;
    try {
        const business = yield businessService.RegisterBusiness(businessInfo, next);
        const outDto = {
            data: business,
            resultCode: 200,
            message: 'Se han registrado correctamente a la empresa y a sus servicios'
        };
        return res
            .status(200)
            .send(outDto);
    }
    catch (e) {
        return next(new exceptions_1.InternalServerException(`There was an unexpected error with the RegisterBusiness controller. ${e.message}`));
    }
});
exports.RegisterBusiness = RegisterBusiness;
const GetAllServicesUsers = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = _req.params;
    try {
        const payment = yield businessService.GetAllServicesUsers(next, _id);
        const outDto = {
            data: payment,
            resultCode: 200,
            message: 'Ok'
        };
        return res
            .status(200)
            .send(outDto);
    }
    catch (e) {
        return next(new exceptions_1.InternalServerException(`There was an unexpected error with the RegisterBusiness controller. ${e.message}`));
    }
});
exports.GetAllServicesUsers = GetAllServicesUsers;
