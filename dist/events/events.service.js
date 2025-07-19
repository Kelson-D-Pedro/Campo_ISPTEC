"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEquipe = createEquipe;
exports.getEquipes = getEquipes;
exports.getEquipeById = getEquipeById;
exports.updateEquipe = updateEquipe;
exports.deleteEquipe = deleteEquipe;
exports.createEvento = createEvento;
exports.getEventos = getEventos;
exports.getEventoById = getEventoById;
exports.updateEvento = updateEvento;
exports.deleteEvento = deleteEvento;
exports.createJogo = createJogo;
exports.getJogos = getJogos;
exports.getJogoById = getJogoById;
exports.updateJogo = updateJogo;
exports.deleteJogo = deleteJogo;
exports.createMarcacao = createMarcacao;
exports.getMarcacoes = getMarcacoes;
exports.getMarcacaoById = getMarcacaoById;
exports.updateMarcacao = updateMarcacao;
exports.deleteMarcacao = deleteMarcacao;
exports.createParticipacaoEquipe = createParticipacaoEquipe;
exports.getParticipacoesEquipe = getParticipacoesEquipe;
exports.getParticipacaoEquipeById = getParticipacaoEquipeById;
exports.updateParticipacaoEquipe = updateParticipacaoEquipe;
exports.deleteParticipacaoEquipe = deleteParticipacaoEquipe;
exports.createTechnician = createTechnician;
exports.getTechnicians = getTechnicians;
exports.getTechnicianById = getTechnicianById;
exports.updateTechnician = updateTechnician;
exports.deleteTechnician = deleteTechnician;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
// ------------------ TEAM ------------------------
async function createEquipe(data) {
    return await prisma.equipe.create({ data });
}
async function getEquipes() {
    return await prisma.equipe.findMany();
}
async function getEquipeById(id) {
    return await prisma.equipe.findUnique({ where: { id } });
}
async function updateEquipe(id, data) {
    return await prisma.equipe.update({ where: { id }, data });
}
async function deleteEquipe(id) {
    return await prisma.equipe.delete({ where: { id } });
}
// --------------------- EVENT ----------------------
async function createEvento(data) {
    return await prisma.evento.create({ data });
}
async function getEventos() {
    return await prisma.evento.findMany();
}
async function getEventoById(id) {
    return await prisma.evento.findUnique({ where: { id } });
}
async function updateEvento(id, data) {
    return await prisma.evento.update({ where: { id }, data });
}
async function deleteEvento(id) {
    return await prisma.evento.delete({ where: { id } });
}
// ------------------------ MATCH ----------------------
async function createJogo(data) {
    return await prisma.jogo.create({ data });
}
async function getJogos() {
    return await prisma.jogo.findMany();
}
async function getJogoById(id) {
    return await prisma.jogo.findUnique({ where: { id } });
}
async function updateJogo(id, data) {
    return await prisma.jogo.update({ where: { id }, data });
}
async function deleteJogo(id) {
    return await prisma.jogo.delete({ where: { id } });
}
// -------------------------- RESERVATION ---------------------
async function createMarcacao(data) {
    return await prisma.marcacao.create({ data });
}
async function getMarcacoes() {
    return await prisma.marcacao.findMany();
}
async function getMarcacaoById(id) {
    return await prisma.marcacao.findUnique({ where: { id } });
}
async function updateMarcacao(id, data) {
    return await prisma.marcacao.update({ where: { id }, data });
}
async function deleteMarcacao(id) {
    return await prisma.marcacao.delete({ where: { id } });
}
// ------------------------- TEAM PARTICIPATION -------------------
async function createParticipacaoEquipe(data) {
    return await prisma.participacaoEquipe.create({ data });
}
async function getParticipacoesEquipe() {
    return await prisma.participacaoEquipe.findMany();
}
async function getParticipacaoEquipeById(id) {
    return await prisma.participacaoEquipe.findUnique({ where: { id } });
}
async function updateParticipacaoEquipe(id, data) {
    return await prisma.participacaoEquipe.update({ where: { id }, data });
}
async function deleteParticipacaoEquipe(id) {
    return await prisma.participacaoEquipe.delete({ where: { id } });
}
// ---------------------------- TECHNICIAN -------------------------
async function createTechnician(data) {
    return await prisma.technician.create({ data });
}
async function getTechnicians() {
    return await prisma.technician.findMany();
}
async function getTechnicianById(id) {
    return await prisma.technician.findUnique({ where: { id } });
}
async function updateTechnician(id, data) {
    return await prisma.technician.update({ where: { id }, data });
}
async function deleteTechnician(id) {
    return await prisma.technician.delete({ where: { id } });
}
