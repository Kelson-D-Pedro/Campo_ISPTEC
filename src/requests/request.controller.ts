import { Request, Response } from "express";
import * as requestService from "./request.service";

// ---------------------- ESTUDANTE ----------------------
export const createEstudante = async (req: Request, res: Response) => {
  try {
    const result = await requestService.createEstudanteRequest(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar marcação de estudante." });
  }
};

export const getEstudanteRequests = async (req: Request, res: Response) => {
  try {
    const { numeroEstudante } = req.params;
    const result = await requestService.listEstudanteRequests(numeroEstudante);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao listar marcações do estudante." });
  }
};

export const updateEstudante = async (req: Request, res: Response) => {
  try {
    const { id, numeroEstudante } = req.params;
    const result = await requestService.updateEstudanteRequest(Number(id), numeroEstudante, req.body);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar marcação do estudante." });
  }
};

export const deleteEstudante = async (req: Request, res: Response) => {
  try {
    const { id, numeroEstudante } = req.params;
    const result = await requestService.deleteEstudanteRequest(Number(id), numeroEstudante);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao apagar marcação do estudante." });
  }
};

// ---------------------- EXTERNO ----------------------
export const createExterno = async (req: Request, res: Response) => {
  try {
    const result = await requestService.createExternRequest(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar marcação externa." });
  }
};

export const getExternoRequests = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const result = await requestService.listExternoRequests(email);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao listar marcações externas." });
  }
};

export const updateExterno = async (req: Request, res: Response) => {
  try {
    const { id, email } = req.params;
    const result = await requestService.updateExternoRequest(Number(id), email, req.body);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar marcação externa." });
  }
};

export const deleteExterno = async (req: Request, res: Response) => {
  try {
    const { id, email } = req.params;
    const result = await requestService.deleteExternoRequest(Number(id), email);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao apagar marcação externa." });
  }
};

// ---------------------- ADMIN ----------------------
export const getAllRequests = async (_req: Request, res: Response) => {
  try {
    const result = await requestService.listAllRequests();
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao listar todas as marcações." });
  }
};

export const deleteAllRequests = async (_req: Request, res: Response) => {
  try {
    const result = await requestService.deleteAllRequests();
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao apagar todas as marcações." });
  }
};

export const updateStatusEstudante = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const result = await requestService.updateEstudanteStatus(Number(id), status);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar status do estudante." });
  }
};

export const updateStatusExterno = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const result = await requestService.updateExternoStatus(Number(id), status);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar status do externo." });
  }
};
