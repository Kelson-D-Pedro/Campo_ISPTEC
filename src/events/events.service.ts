import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

// ------------------ TEAM ------------------------
export async function createEquipe(data : any) {
  return await prisma.equipe.create({ data });
}

export async function getEquipes() {
  return await prisma.equipe.findMany();
}

export async function getEquipeById(id : number) {
  return await prisma.equipe.findUnique({ where: { id } });
}

export async function updateEquipe(id : number, data : any) {
  return await prisma.equipe.update({ where: { id }, data });
}

export async function deleteEquipe(id : number) {
  return await prisma.equipe.delete({ where: { id } });
}

// --------------------- EVENT ----------------------

export async function createEvento(data : any) {
  return await prisma.evento.create({ data });
}

export async function getEventos() {
  return await prisma.evento.findMany();
}

export async function getEventoById(id : number) {
  return await prisma.evento.findUnique({ where: { id } });
}

export async function updateEvento(id : number, data : any) {
  return await prisma.evento.update({ where: { id }, data });
}

export async function deleteEvento(id : number) {
  return await prisma.evento.delete({ where: { id } });
}

// ------------------------ MATCH ----------------------

export async function createJogo(data : any) {
  return await prisma.jogo.create({ data });
}

export async function getJogos() {
  return await prisma.jogo.findMany();
}

export async function getJogoById(id : number) {
  return await prisma.jogo.findUnique({ where: { id } });
}

export async function updateJogo(id : number, data : any) {
  return await prisma.jogo.update({ where: { id }, data });
}

export async function deleteJogo(id : number) {
  return await prisma.jogo.delete({ where: { id } });
}

// -------------------------- RESERVATION ---------------------

export async function createMarcacao(data : any) {
  return await prisma.marcacao.create({ data });
}

export async function getMarcacoes() {
  return await prisma.marcacao.findMany();
}

export async function getMarcacaoById(id : number) {
  return await prisma.marcacao.findUnique({ where: { id } });
}

export async function updateMarcacao(id : number, data : any) {
  return await prisma.marcacao.update({ where: { id }, data });
}

export async function deleteMarcacao(id : number) {
  return await prisma.marcacao.delete({ where: { id } });
}

// ------------------------- TEAM PARTICIPATION -------------------

export async function createParticipacaoEquipe(data : any) {
  return await prisma.participacaoEquipe.create({ data });
}

export async function getParticipacoesEquipe() {
  return await prisma.participacaoEquipe.findMany();
}

export async function getParticipacaoEquipeById(id : number) {
  return await prisma.participacaoEquipe.findUnique({ where: { id } });
}

export async function updateParticipacaoEquipe(id : number, data : any) {
  return await prisma.participacaoEquipe.update({ where: { id }, data });
}

export async function deleteParticipacaoEquipe(id : number) {
  return await prisma.participacaoEquipe.delete({ where: { id } });
}

// ---------------------------- TECHNICIAN -------------------------

export async function createTechnician(data : any) {
  return await prisma.technician.create({ data });
}

export async function getTechnicians() {
  return await prisma.technician.findMany();
}

export async function getTechnicianById(id : number) {
  return await prisma.technician.findUnique({ where: { id } });
}

export async function updateTechnician(id : number, data : any) {
  return await prisma.technician.update({ where: { id }, data });
}

export async function deleteTechnician(id : number) {
  return await prisma.technician.delete({ where: { id } });
}

