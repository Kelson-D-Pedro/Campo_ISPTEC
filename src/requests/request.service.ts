import { PrismaClient } from "generated/prisma";

const prisma = new PrismaClient();
// -------------------- ESTUDANTES --------------------
export const createEstudanteRequest = async (data: any) => {
  return await prisma.estudante.create({ data });
};

export const listEstudanteRequests = async (numeroEstudante: string) => {
  return await prisma.estudante.findMany({
    where: { numeroEstudante },
  });
};

export const updateEstudanteRequest = async (id: number, numeroEstudante: string, data: any) => {
  return await prisma.estudante.updateMany({
    where: { id, numeroEstudante },
    data,
  });
};

export const deleteEstudanteRequest = async (id: number, numeroEstudante: string) => {
  return await prisma.estudante.deleteMany({
    where: { id, numeroEstudante },
  });
};

// -------------------- EXTERNOS --------------------
export const createExternRequest = async (data: any) => {
  return await prisma.externo.create({ data });
};

export const listExternoRequests = async (email: string) => {
  return await prisma.externo.findMany({
    where: { email },
  });
};

export const updateExternoRequest = async (id: number, email: string, data: any) => {
  return await prisma.externo.updateMany({
    where: { id, email },
    data,
  });
};

export const deleteExternoRequest = async (id: number, email: string) => {
  return await prisma.externo.deleteMany({
    where: { id, email },
  });
};

// -------------------- ADMIN --------------------
export const listAllRequests = async () => {
  const estudantes = await prisma.estudante.findMany();
  const externos = await prisma.externo.findMany();
  return { estudantes, externos };
};

export const deleteAllRequests = async () => {
  await prisma.estudante.deleteMany({});
  await prisma.externo.deleteMany({});
  return { message: "All requests deleted successfully" };
}