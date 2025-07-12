"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const request_controller_1 = require("./requests/request.controller");
const request_controller_2 = require("./requests/request.controller");
const request_controller_3 = require("./requests/request.controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// ------- ESTUDANTE -------
app.use("/estudante", request_controller_1.createEstudante);
app.use("/estudante/:numeroEstudante", request_controller_1.getEstudanteRequests);
app.put("/estudante/:id", request_controller_1.updateEstudante);
app.delete("/estudante/:id", request_controller_1.deleteEstudante);
// ------- EXTERNO -------
app.use("/externo", request_controller_2.createExterno);
app.use("/externo/:email", request_controller_2.getExternoRequests);
app.use("/externo/:id", request_controller_2.updateExterno);
app.delete("/externo/:id", request_controller_2.deleteExterno);
// ------- ADMIN -------
app.use("/admin/all", request_controller_3.getAllRequests);
app.use("/admin/all", request_controller_3.deleteAllRequests);
app.use("/admin/estudante/:id/status", request_controller_3.updateStatusEstudante);
app.use("/admin/externo/:id/status", request_controller_3.updateStatusExterno);
exports.default = app;
