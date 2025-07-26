"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOtp = exports.validatePassword = exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
exports.transporter = nodemailer_1.default.createTransport({
    service: 'gmail', // ou smtp isptec, outlook etc
    auth: {
        user: process.env.EMAIL_USER, // exemplo: isptrecuperacao@gmail.com
        pass: process.env.EMAIL_PASS // senha do app ou smtp
    }
});
const validatePassword = (senha) => {
    return senha.length >= 6 && /[A-Z]/.test(senha) && /\d/.test(senha);
};
exports.validatePassword = validatePassword;
const generateOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    return otp;
};
exports.generateOtp = generateOtp;
