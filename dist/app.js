"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const request_controller_1 = require("./requests/request.controller");
const request_controller_2 = require("./requests/request.controller");
const request_controller_3 = require("./requests/request.controller");
const auth_controller_1 = require("./auth/auth.controller");
const events_controller_1 = require("./events/events.controller");
const events_controller_2 = require("./events/events.controller");
const events_controller_3 = require("./events/events.controller");
const events_controller_4 = require("./events/events.controller");
const events_controller_5 = require("./events/events.controller");
const events_controller_6 = require("./events/events.controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// ------- AUTH -------
app.use("/api/register", auth_controller_1.register);
app.use("/api/login", auth_controller_1.login);
app.use("/api/recover", auth_controller_1.recoverPassword);
app.use("/api/delete/:id", auth_controller_1.deleteUser);
app.use("/api/getUsers", auth_controller_1.getUsers);
// ------- BD -------
// ------- ESTUDANTE -------
app.use("/api/estudante", request_controller_1.createEstudante);
app.use("/api/estudante/:numeroEstudante", request_controller_1.getEstudanteRequests);
app.put("/api/estudante/:id", request_controller_1.updateEstudante);
app.use("/api/estudante/:id", request_controller_1.deleteEstudante);
// ------- EXTERNO -------
app.use("/api/externo", request_controller_2.createExterno);
app.use("/api/externo/:email", request_controller_2.getExternoRequests);
app.use("/api/externo/:id", request_controller_2.updateExterno);
app.use("/api/externo/:id", request_controller_2.deleteExterno);
// ------- ADMIN -------
app.use("/api/admin/all", request_controller_3.getAllRequests);
app.use("/api/admin/all", request_controller_3.deleteAllRequests);
app.use("/api/admin/estudante/:id/status", request_controller_3.updateStatusEstudante);
app.use("/api/admin/externo/:id/status", request_controller_3.updateStatusExterno);
// ------- EVENTOS -------
app.use("/api/jogos", events_controller_1.createJogoController);
app.use("/api/jogos", events_controller_1.getJogosController);
app.use("/api/jogos/:id", events_controller_1.getJogoByIdController);
app.use("/api/jogos/:id", events_controller_1.updateJogoController);
app.use("/api/jogos/:id", events_controller_1.deleteJogoController);
app.use("/api/marcacoes", events_controller_2.createMarcacaoController);
app.use("/api/marcacoes", events_controller_2.getMarcacoesController);
app.use("/api/marcacoes/:id", events_controller_2.getMarcacaoByIdController);
app.use("/api/marcacoes/:id", events_controller_2.updateMarcacaoController);
app.use("/api/marcacoes/:id", events_controller_2.deleteMarcacaoController);
app.use("/api/participacoes", events_controller_3.createParticipacaoController);
app.use("/api/participacoes", events_controller_3.getParticipacoesController);
app.use("/api/participacoes/:id", events_controller_3.getParticipacaoByIdController);
app.use("/api/participacoes/:id", events_controller_3.updateParticipacaoController);
app.use("/api/participacoes/:id", events_controller_3.deleteParticipacaoController);
app.use("/api/technicians", events_controller_4.createTechnicianController);
app.use("/api/technicians", events_controller_4.getTechniciansController);
app.use("/api/technicians/:id", events_controller_4.getTechnicianByIdController);
app.use("/api/technicians/:id", events_controller_4.updateTechnicianController);
app.use("/api/technicians/:id", events_controller_4.deleteTechnicianController);
app.use("/api/equipes", events_controller_5.createEquipeController);
app.use("/api/equipes", events_controller_5.getEquipesController);
app.use("/api/equipes/:id", events_controller_5.getEquipeByIdController);
app.use("/api/equipes/:id", events_controller_5.updateEquipeController);
app.use("/api/equipes/:id", events_controller_5.deleteEquipeController);
app.use("/api/eventos", events_controller_6.createEventoController);
app.use("/api/eventos", events_controller_6.getEventosController);
app.use("/api/eventos/:id", events_controller_6.getEventoByIdController);
app.use("/api/eventos/:id", events_controller_6.updateEventoController);
app.use("/api/eventos/:id", events_controller_6.deleteEventoController);
exports.default = app;
