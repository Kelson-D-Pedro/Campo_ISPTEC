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
exports.deleteTechnicianController = exports.updateTechnicianController = exports.getTechnicianByIdController = exports.getTechniciansController = exports.createTechnicianController = exports.deleteParticipacaoController = exports.updateParticipacaoController = exports.getParticipacaoByIdController = exports.getParticipacoesController = exports.createParticipacaoController = exports.deleteMarcacaoController = exports.updateMarcacaoController = exports.getMarcacaoByIdController = exports.getMarcacoesController = exports.createMarcacaoController = exports.deleteJogoController = exports.updateJogoController = exports.getJogoByIdController = exports.getJogosController = exports.createJogoController = exports.deleteEquipeController = exports.updateEquipeController = exports.getEquipeByIdController = exports.getEquipesController = exports.createEquipeController = exports.deleteEventoController = exports.updateEventoController = exports.getEventoByIdController = exports.getEventosController = exports.createEventoController = void 0;
const eventService = __importStar(require("./events.service"));
// -------------------------- EVENTS ---------------------------
// Criar evento
const createEventoController = async (req, res) => {
    try {
        console.log("Creating evento:", req.body);
        const result = await eventService.createEvento(req.body);
        console.log("Evento created:", result);
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Error creating evento:", error);
        return res.status(500).json({ error: "Erro ao criar evento." });
    }
};
exports.createEventoController = createEventoController;
// Listar eventos
const getEventosController = async (_req, res) => {
    try {
        console.log("Fetching all eventos");
        const result = await eventService.getEventos();
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Error fetching eventos:", error);
        return res.status(500).json({ error: "Erro ao listar eventos." });
    }
};
exports.getEventosController = getEventosController;
// Buscar evento por ID
const getEventoByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Fetching evento with ID:", id);
        const result = await eventService.getEventoById(Number(id));
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Error fetching evento:", error);
        return res.status(500).json({ error: "Erro ao obter evento." });
    }
};
exports.getEventoByIdController = getEventoByIdController;
// Atualizar evento
const updateEventoController = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Updating evento with ID:", id);
        const result = await eventService.updateEvento(Number(id), req.body);
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Error updating evento:", error);
        return res.status(500).json({ error: "Erro ao atualizar evento." });
    }
};
exports.updateEventoController = updateEventoController;
// Deletar evento
const deleteEventoController = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Deleting evento with ID:", id);
        const result = await eventService.deleteEvento(Number(id));
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Error deleting evento:", error);
        return res.status(500).json({ error: "Erro ao deletar evento." });
    }
};
exports.deleteEventoController = deleteEventoController;
// --------------------------- TEAMS ----------------------------
const createEquipeController = async (req, res) => {
    try {
        console.log("Creating equipe:", req.body);
        const result = await eventService.createEquipe(req.body);
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao criar equipe:", error);
        return res.status(500).json({ error: "Erro ao criar equipe." });
    }
};
exports.createEquipeController = createEquipeController;
const getEquipesController = async (_req, res) => {
    try {
        const result = await eventService.getEquipes();
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao listar equipes:", error);
        return res.status(500).json({ error: "Erro ao listar equipes." });
    }
};
exports.getEquipesController = getEquipesController;
const getEquipeByIdController = async (req, res) => {
    try {
        const result = await eventService.getEquipeById(Number(req.params.id));
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao obter equipe:", error);
        return res.status(500).json({ error: "Erro ao buscar equipe." });
    }
};
exports.getEquipeByIdController = getEquipeByIdController;
const updateEquipeController = async (req, res) => {
    try {
        const result = await eventService.updateEquipe(Number(req.params.id), req.body);
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao atualizar equipe:", error);
        return res.status(500).json({ error: "Erro ao atualizar equipe." });
    }
};
exports.updateEquipeController = updateEquipeController;
const deleteEquipeController = async (req, res) => {
    try {
        const result = await eventService.deleteEquipe(Number(req.params.id));
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao deletar equipe:", error);
        return res.status(500).json({ error: "Erro ao deletar equipe." });
    }
};
exports.deleteEquipeController = deleteEquipeController;
// ----------------------------- MATCH --------------------------
const createJogoController = async (req, res) => {
    try {
        console.log("Creating jogo:", req.body);
        const result = await eventService.createJogo(req.body);
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao criar jogo:", error);
        return res.status(500).json({ error: "Erro ao criar jogo." });
    }
};
exports.createJogoController = createJogoController;
const getJogosController = async (_req, res) => {
    try {
        const result = await eventService.getJogos();
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao listar jogos:", error);
        return res.status(500).json({ error: "Erro ao listar jogos." });
    }
};
exports.getJogosController = getJogosController;
const getJogoByIdController = async (req, res) => {
    try {
        const result = await eventService.getJogoById(Number(req.params.id));
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao buscar jogo:", error);
        return res.status(500).json({ error: "Erro ao buscar jogo." });
    }
};
exports.getJogoByIdController = getJogoByIdController;
const updateJogoController = async (req, res) => {
    try {
        const result = await eventService.updateJogo(Number(req.params.id), req.body);
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao atualizar jogo:", error);
        return res.status(500).json({ error: "Erro ao atualizar jogo." });
    }
};
exports.updateJogoController = updateJogoController;
const deleteJogoController = async (req, res) => {
    try {
        const result = await eventService.deleteJogo(Number(req.params.id));
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao deletar jogo:", error);
        return res.status(500).json({ error: "Erro ao deletar jogo." });
    }
};
exports.deleteJogoController = deleteJogoController;
// -------------------------- RESERVATION ----------------------
const createMarcacaoController = async (req, res) => {
    try {
        console.log("Creating marcacao:", req.body);
        const result = await eventService.createMarcacao(req.body);
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao criar marcacao:", error);
        return res.status(500).json({ error: "Erro ao criar marcacao." });
    }
};
exports.createMarcacaoController = createMarcacaoController;
const getMarcacoesController = async (_req, res) => {
    try {
        const result = await eventService.getMarcacoes();
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao listar marcacoes:", error);
        return res.status(500).json({ error: "Erro ao listar marcacoes." });
    }
};
exports.getMarcacoesController = getMarcacoesController;
const getMarcacaoByIdController = async (req, res) => {
    try {
        const result = await eventService.getMarcacaoById(Number(req.params.id));
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao buscar marcacao:", error);
        return res.status(500).json({ error: "Erro ao buscar marcacao." });
    }
};
exports.getMarcacaoByIdController = getMarcacaoByIdController;
const updateMarcacaoController = async (req, res) => {
    try {
        const result = await eventService.updateMarcacao(Number(req.params.id), req.body);
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao atualizar marcacao:", error);
        return res.status(500).json({ error: "Erro ao atualizar marcacao." });
    }
};
exports.updateMarcacaoController = updateMarcacaoController;
const deleteMarcacaoController = async (req, res) => {
    try {
        const result = await eventService.deleteMarcacao(Number(req.params.id));
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao deletar marcacao:", error);
        return res.status(500).json({ error: "Erro ao deletar marcacao." });
    }
};
exports.deleteMarcacaoController = deleteMarcacaoController;
// ------------------------- TEAM PARTICIPATION -------------------
const createParticipacaoController = async (req, res) => {
    try {
        const result = await eventService.createParticipacaoEquipe(req.body);
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao criar participacao:", error);
        return res.status(500).json({ error: "Erro ao criar participacao." });
    }
};
exports.createParticipacaoController = createParticipacaoController;
const getParticipacoesController = async (_req, res) => {
    try {
        const result = await eventService.getParticipacoesEquipe();
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao listar participacoes:", error);
        return res.status(500).json({ error: "Erro ao listar participacoes." });
    }
};
exports.getParticipacoesController = getParticipacoesController;
const getParticipacaoByIdController = async (req, res) => {
    try {
        const result = await eventService.getParticipacaoEquipeById(Number(req.params.id));
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao buscar participacao:", error);
        return res.status(500).json({ error: "Erro ao buscar participacao." });
    }
};
exports.getParticipacaoByIdController = getParticipacaoByIdController;
const updateParticipacaoController = async (req, res) => {
    try {
        const result = await eventService.updateParticipacaoEquipe(Number(req.params.id), req.body);
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao atualizar participacao:", error);
        return res.status(500).json({ error: "Erro ao atualizar participacao." });
    }
};
exports.updateParticipacaoController = updateParticipacaoController;
const deleteParticipacaoController = async (req, res) => {
    try {
        const result = await eventService.deleteParticipacaoEquipe(Number(req.params.id));
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao deletar participacao:", error);
        return res.status(500).json({ error: "Erro ao deletar participacao." });
    }
};
exports.deleteParticipacaoController = deleteParticipacaoController;
// ---------------------------- TECHNICIAN -------------------------
const createTechnicianController = async (req, res) => {
    try {
        const result = await eventService.createTechnician(req.body);
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao criar tecnico:", error);
        return res.status(500).json({ error: "Erro ao criar tecnico." });
    }
};
exports.createTechnicianController = createTechnicianController;
const getTechniciansController = async (_req, res) => {
    try {
        const result = await eventService.getTechnicians();
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao listar tecnicos:", error);
        return res.status(500).json({ error: "Erro ao listar tecnicos." });
    }
};
exports.getTechniciansController = getTechniciansController;
const getTechnicianByIdController = async (req, res) => {
    try {
        const result = await eventService.getTechnicianById(Number(req.params.id));
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao buscar tecnico:", error);
        return res.status(500).json({ error: "Erro ao buscar tecnico." });
    }
};
exports.getTechnicianByIdController = getTechnicianByIdController;
const updateTechnicianController = async (req, res) => {
    try {
        const result = await eventService.updateTechnician(Number(req.params.id), req.body);
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao atualizar tecnico:", error);
        return res.status(500).json({ error: "Erro ao atualizar tecnico." });
    }
};
exports.updateTechnicianController = updateTechnicianController;
const deleteTechnicianController = async (req, res) => {
    try {
        const result = await eventService.deleteTechnician(Number(req.params.id));
        return res.status(201).json(result);
    }
    catch (error) {
        console.error("Erro ao deletar tecnico:", error);
        return res.status(500).json({ error: "Erro ao deletar tecnico." });
    }
};
exports.deleteTechnicianController = deleteTechnicianController;
