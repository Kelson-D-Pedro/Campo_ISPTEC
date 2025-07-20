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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUsers = exports.recoverPassword = exports.login = exports.register = void 0;
const AuthService = __importStar(require("./auth.service"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const register = async (req, res) => {
    try {
        const user = await AuthService.register(req.body);
        res.status(201).json(user);
        console.log("User registered successfully:", user);
    }
    catch (error) {
        console.error("Error registering user:", error);
        res.status(400).json({ error: "Erro ao registrar usuário." });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const token = await AuthService.login(req.body);
        console.log("User logged in successfully, token generated.");
        res.status(200).json({ token });
    }
    catch (error) {
        console.error("Error logging in user:", error);
        res.status(401).json({ error: "Credenciais inválidas." });
    }
};
exports.login = login;
const recoverPassword = async (req, res) => {
    const { numeroEstudante } = req.body;
    if (!numeroEstudante) {
        return res.status(400).json({ error: 'Número de estudante é obrigatório.' });
    }
    try {
        await AuthService.recoverPassword(numeroEstudante);
        console.log("Password recovery instructions sent to:", numeroEstudante);
        res.status(200).json({ message: 'Instruções enviadas para o e-mail institucional.' });
    }
    catch (error) {
        console.error("Error recovering password:", error);
        res.status(400).json({ error: "Erro ao recuperar senha." });
    }
};
exports.recoverPassword = recoverPassword;
const getUsers = async (req, res) => {
    try {
        console.log("Fetching all registered users.");
        const users = await prisma.user.findMany();
        console.log("Users retrieved successfully.");
        console.log(users);
        res.status(200).json(users);
    }
    catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).json({ error: "Erro ao obter usuários." });
    }
};
exports.getUsers = getUsers;
const deleteUser = async (req, res) => {
    try {
        const userID = req.params.id;
        if (!userID) {
            console.error("User not authenticated for deletion.");
            return res.status(401).json({ error: "Usuário não autenticado" });
        }
        const userId = Number(userID);
        if (isNaN(userId)) {
            console.error("Invalid user ID for deletion:", userID);
            return res.status(400).json({ error: "ID de usuário inválido" });
        }
        await AuthService.deleteUser(userId);
        console.log("User deleted successfully with ID:", userId);
        res.status(204).end();
    }
    catch (err) {
        console.error("Error deleting user:", err);
        res.status(400).json({ error: "Erro ao apagar usuário." });
    }
};
exports.deleteUser = deleteUser;
