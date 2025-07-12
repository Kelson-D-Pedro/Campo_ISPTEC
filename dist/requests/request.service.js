"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExternoStatus = exports.updateEstudanteStatus = exports.deleteAllRequests = exports.listAllRequests = exports.deleteExternoRequest = exports.updateExternoRequest = exports.listExternoRequests = exports.createExternRequest = exports.deleteEstudanteRequest = exports.updateEstudanteRequest = exports.listEstudanteRequests = exports.createEstudanteRequest = void 0;
const prisma_1 = require("generated/prisma");
const prisma = new prisma_1.PrismaClient();
// -------------------- ESTUDANTES --------------------
const createEstudanteRequest = async (data) => {
    return await prisma.estudante.create({ data });
};
exports.createEstudanteRequest = createEstudanteRequest;
const listEstudanteRequests = async (numeroEstudante) => {
    return await prisma.estudante.findMany({
        where: { numeroEstudante },
    });
};
exports.listEstudanteRequests = listEstudanteRequests;
const updateEstudanteRequest = async (id, numeroEstudante, data) => {
    return await prisma.estudante.updateMany({
        where: { id, numeroEstudante },
        data,
    });
};
exports.updateEstudanteRequest = updateEstudanteRequest;
const deleteEstudanteRequest = async (id, numeroEstudante) => {
    return await prisma.estudante.deleteMany({
        where: { id, numeroEstudante },
    });
};
exports.deleteEstudanteRequest = deleteEstudanteRequest;
// -------------------- EXTERNOS --------------------
const createExternRequest = async (data) => {
    return await prisma.externo.create({ data });
};
exports.createExternRequest = createExternRequest;
const listExternoRequests = async (email) => {
    return await prisma.externo.findMany({
        where: { email },
    });
};
exports.listExternoRequests = listExternoRequests;
const updateExternoRequest = async (id, email, data) => {
    return await prisma.externo.updateMany({
        where: { id, email },
        data,
    });
};
exports.updateExternoRequest = updateExternoRequest;
const deleteExternoRequest = async (id, email) => {
    return await prisma.externo.deleteMany({
        where: { id, email },
    });
};
exports.deleteExternoRequest = deleteExternoRequest;
// -------------------- ADMIN --------------------
const listAllRequests = async () => {
    const estudantes = await prisma.estudante.findMany();
    const externos = await prisma.externo.findMany();
    return { estudantes, externos };
};
exports.listAllRequests = listAllRequests;
const deleteAllRequests = async () => {
    await prisma.estudante.deleteMany({});
    await prisma.externo.deleteMany({});
    return { message: "All requests deleted successfully" };
};
exports.deleteAllRequests = deleteAllRequests;
const updateEstudanteStatus = async (id, status) => {
    return await prisma.estudante.update({
        where: { id },
        data: { status },
    });
};
exports.updateEstudanteStatus = updateEstudanteStatus;
const updateExternoStatus = async (id, status) => {
    return await prisma.externo.update({
        where: { id },
        data: { status },
    });
};
exports.updateExternoStatus = updateExternoStatus;
