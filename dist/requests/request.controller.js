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
exports.updateStatusExterno = exports.updateStatusEstudante = exports.deleteAllRequests = exports.getAllRequests = exports.deleteExterno = exports.updateExterno = exports.getExternoRequests = exports.createExterno = exports.deleteEstudante = exports.updateEstudante = exports.getEstudanteRequests = exports.createEstudante = void 0;
const requestService = __importStar(require("./request.service"));
// ---------------------- ESTUDANTE ----------------------
const createEstudante = async (req, res) => {
    try {
        console.log("Creating estudante request with data:", req.body);
        const result = await requestService.createEstudanteRequest(req.body);
        console.log("Estudante request created successfully:", result);
        return res.status(201).json(result);
    }
    catch (error) {
        return res.status(500).json({ error: "Erro ao criar marcação de estudante." });
    }
};
exports.createEstudante = createEstudante;
const getEstudanteRequests = async (req, res) => {
    try {
        const { numeroEstudante } = req.params;
        console.log("Fetching estudante requests for:", numeroEstudante);
        const result = await requestService.listEstudanteRequests(numeroEstudante);
        console.log("Estudante requests fetched successfully:", result);
        return res.json(result);
    }
    catch (error) {
        console.error("Error fetching estudante requests:", error);
        return res.status(500).json({ error: "Erro ao listar marcações do estudante." });
    }
};
exports.getEstudanteRequests = getEstudanteRequests;
const updateEstudante = async (req, res) => {
    try {
        const { id, numeroEstudante } = req.params;
        console.log("Updating estudante request with ID:", id, "and numeroEstudante:", numeroEstudante);
        const result = await requestService.updateEstudanteRequest(Number(id), numeroEstudante, req.body);
        console.log("Estudante request updated successfully:", result);
        return res.json(result);
    }
    catch (error) {
        console.error("Error updating estudante request:", error);
        return res.status(500).json({ error: "Erro ao atualizar marcação do estudante." });
    }
};
exports.updateEstudante = updateEstudante;
const deleteEstudante = async (req, res) => {
    try {
        const { id, numeroEstudante } = req.params;
        console.log("Deleting estudante request with ID:", id, "and numeroEstudante:", numeroEstudante);
        const result = await requestService.deleteEstudanteRequest(Number(id), numeroEstudante);
        console.log("Estudante request deleted successfully:", result);
        return res.json(result);
    }
    catch (error) {
        console.error("Error deleting estudante request:", error);
        return res.status(500).json({ error: "Erro ao apagar marcação do estudante." });
    }
};
exports.deleteEstudante = deleteEstudante;
// ---------------------- EXTERNO ----------------------
const createExterno = async (req, res) => {
    try {
        console.log("Creating externo request with data:", req.body);
        const result = await requestService.createExternRequest(req.body);
        console.log("Externo request created successfully:", result);
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Error creating externo request:", error);
        return res.status(500).json({ error: "Erro ao criar marcação externa." });
    }
};
exports.createExterno = createExterno;
const getExternoRequests = async (req, res) => {
    try {
        const { email } = req.params;
        console.log("Fetching externo requests for email:", email);
        const result = await requestService.listExternoRequests(email);
        console.log("Externo requests fetched successfully:", result);
        return res.json(result);
    }
    catch (error) {
        console.error("Error fetching externo requests:", error);
        return res.status(500).json({ error: "Erro ao listar marcações externas." });
    }
};
exports.getExternoRequests = getExternoRequests;
const updateExterno = async (req, res) => {
    try {
        const { id, email } = req.params;
        console.log("Updating externo request with ID:", id, "and email:", email);
        const result = await requestService.updateExternoRequest(Number(id), email, req.body);
        console.log("Externo request updated successfully:", result);
        return res.json(result);
    }
    catch (error) {
        console.error("Error updating externo request:", error);
        return res.status(500).json({ error: "Erro ao atualizar marcação externa." });
    }
};
exports.updateExterno = updateExterno;
const deleteExterno = async (req, res) => {
    try {
        const { id, email } = req.params;
        console.log("Deleting externo request with ID:", id, "and email:", email);
        const result = await requestService.deleteExternoRequest(Number(id), email);
        console.log("Externo request deleted successfully:", result);
        return res.json(result);
    }
    catch (error) {
        console.error("Error deleting externo request:", error);
        return res.status(500).json({ error: "Erro ao apagar marcação externa." });
    }
};
exports.deleteExterno = deleteExterno;
// ---------------------- ADMIN ----------------------
const getAllRequests = async (_req, res) => {
    try {
        console.log("Fetching all requests for admin");
        const result = await requestService.listAllRequests();
        console.log("All requests fetched successfully:", result);
        return res.json(result);
    }
    catch (error) {
        console.error("Error fetching all requests:", error);
        return res.status(500).json({ error: "Erro ao listar todas as marcações." });
    }
};
exports.getAllRequests = getAllRequests;
const deleteAllRequests = async (_req, res) => {
    try {
        console.log("Deleting all requests for admin");
        const result = await requestService.deleteAllRequests();
        console.log("All requests deleted successfully:", result);
        return res.json(result);
    }
    catch (error) {
        console.error("Error deleting all requests:", error);
        return res.status(500).json({ error: "Erro ao apagar todas as marcações." });
    }
};
exports.deleteAllRequests = deleteAllRequests;
const updateStatusEstudante = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        console.log("Updating estudante status with ID:", id, "to status:", status);
        const result = await requestService.updateEstudanteStatus(Number(id), status);
        console.log("Estudante status updated successfully:", result);
        return res.json(result);
    }
    catch (error) {
        console.error("Error updating estudante status:", error);
        return res.status(500).json({ error: "Erro ao atualizar status do estudante." });
    }
};
exports.updateStatusEstudante = updateStatusEstudante;
const updateStatusExterno = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        console.log("Updating externo status with ID:", id, "to status:", status);
        const result = await requestService.updateExternoStatus(Number(id), status);
        console.log("Externo status updated successfully:", result);
        return res.json(result);
    }
    catch (error) {
        console.error("Error updating externo status:", error);
        return res.status(500).json({ error: "Erro ao atualizar status do externo." });
    }
};
exports.updateStatusExterno = updateStatusExterno;
