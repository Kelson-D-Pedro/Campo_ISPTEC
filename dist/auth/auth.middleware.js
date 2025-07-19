"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRole = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET = process.env.JWT_SECRET;
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).json({ error: 'Token ausente' });
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, SECRET);
        if (typeof decoded === 'object' && decoded !== null && 'id' in decoded) {
            req.user = decoded;
            next();
        }
        else {
            console.error("Decoded token does not contain user ID:", decoded);
            return res.status(401).json({ error: 'Token inválido ou expirado' });
        }
    }
    catch (err) {
        console.error("Token verification error:", err);
        res.status(401).json({ error: 'Token inválido ou expirado' });
    }
};
exports.verifyToken = verifyToken;
const checkRole = (roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.tipo)) {
            return res.status(403).json({ error: 'Permissão negada' });
        }
        next();
    };
};
exports.checkRole = checkRole;
