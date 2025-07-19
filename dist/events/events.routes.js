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
const express_1 = require("express");
const Controllers = __importStar(require("./events.controller"));
const router = (0, express_1.Router)();
router.post("/api/jogos", Controllers.createJogoController);
router.get("/api/jogos", Controllers.getJogosController);
router.get("/api/jogos/:id", Controllers.getJogoByIdController);
router.put("/api/jogos/:id", Controllers.updateJogoController);
router.delete("/jogos/:id", Controllers.deleteJogoController);
router.post("/api/marcacoes", Controllers.createMarcacaoController);
router.get("/api/marcacoes", Controllers.getMarcacoesController);
router.get("/api/marcacoes/:id", Controllers.getMarcacaoByIdController);
router.put("/api/marcacoes/:id", Controllers.updateMarcacaoController);
router.delete("/api/marcacoes/:id", Controllers.deleteMarcacaoController);
router.post("/api/participacoes", Controllers.createParticipacaoController);
router.get("/api/participacoes", Controllers.getParticipacoesController);
router.get("/api/participacoes/:id", Controllers.getParticipacaoByIdController);
router.put("/api/participacoes/:id", Controllers.updateParticipacaoController);
router.delete("/api/participacoes/:id", Controllers.deleteParticipacaoController);
router.post("/api/technicians", Controllers.createTechnicianController);
router.get("/api/technicians", Controllers.getTechniciansController);
router.get("/api/technicians/:id", Controllers.getTechnicianByIdController);
router.put("/api/technicians/:id", Controllers.updateTechnicianController);
router.delete("/api/technicians/:id", Controllers.deleteTechnicianController);
router.post("/api/equipes", Controllers.createEquipeController);
router.get("/api/equipes", Controllers.getEquipesController);
router.get("/api/equipes/:id", Controllers.getEquipeByIdController);
router.put("/api/equipes/:id", Controllers.updateEquipeController);
router.delete("/api/equipes/:id", Controllers.deleteEquipeController);
router.post("/api/eventos", Controllers.createEventoController);
router.get("/api/eventos", Controllers.getEventosController);
router.get("/api/eventos/:id", Controllers.getEventoByIdController);
router.put("/api/eventos/:id", Controllers.updateEventoController);
router.delete("/api/eventos/:id", Controllers.deleteEventoController);
exports.default = router;
