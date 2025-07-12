import { Request, Response } from "express";
import * as requestService from "./request.service";

// ---------------------- ESTUDANTE ----------------------
export const createEstudante = async (req: Request, res: Response) => {
  try {
    console.log("Creating estudante request with data:", req.body);
    const result = await requestService.createEstudanteRequest(req.body);
    console.log("Estudante request created successfully:", result);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar marcação de estudante." });
  }
};

export const getEstudanteRequests = async (req: Request, res: Response) => {
  try {
    const { numeroEstudante } = req.params;
    console.log("Fetching estudante requests for:", numeroEstudante);
    const result = await requestService.listEstudanteRequests(numeroEstudante);
    console.log("Estudante requests fetched successfully:", result);
    return res.json(result);
  } catch (error) {
    console.error("Error fetching estudante requests:", error);
    return res.status(500).json({ error: "Erro ao listar marcações do estudante." });
  }
};

export const updateEstudante = async (req: Request, res: Response) => {
  try {
    const { id, numeroEstudante } = req.params;
    console.log("Updating estudante request with ID:", id, "and numeroEstudante:", numeroEstudante);
    const result = await requestService.updateEstudanteRequest(Number(id), numeroEstudante, req.body);
    console.log("Estudante request updated successfully:", result);
    return res.json(result);
  } catch (error) {
    console.error("Error updating estudante request:", error);
    return res.status(500).json({ error: "Erro ao atualizar marcação do estudante." });
  }
};

export const deleteEstudante = async (req: Request, res: Response) => {
  try {
    const { id, numeroEstudante } = req.params;
    console.log("Deleting estudante request with ID:", id, "and numeroEstudante:", numeroEstudante);
    const result = await requestService.deleteEstudanteRequest(Number(id), numeroEstudante);
    console.log("Estudante request deleted successfully:", result);
    return res.json(result);
  } catch (error) {
    console.error("Error deleting estudante request:", error);
    return res.status(500).json({ error: "Erro ao apagar marcação do estudante." });
  }
};

// ---------------------- EXTERNO ----------------------
export const createExterno = async (req: Request, res: Response) => {
  try {
    console.log("Creating externo request with data:", req.body);
    const result = await requestService.createExternRequest(req.body);
    console.log("Externo request created successfully:", result);
    return res.status(201).json(result);
  } catch (error) {
    console.error("Error creating externo request:", error);
    return res.status(500).json({ error: "Erro ao criar marcação externa." });
  }
};

export const getExternoRequests = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    console.log("Fetching externo requests for email:", email);
    const result = await requestService.listExternoRequests(email);
    console.log("Externo requests fetched successfully:", result);
    return res.json(result);
  } catch (error) {
    console.error("Error fetching externo requests:", error);
    return res.status(500).json({ error: "Erro ao listar marcações externas." });
  }
};

export const updateExterno = async (req: Request, res: Response) => {
  try {
    const { id, email } = req.params;
    console.log("Updating externo request with ID:", id, "and email:", email);
    const result = await requestService.updateExternoRequest(Number(id), email, req.body);
    console.log("Externo request updated successfully:", result);
    return res.json(result);
  } catch (error) {
    console.error("Error updating externo request:", error);
    return res.status(500).json({ error: "Erro ao atualizar marcação externa." });
  }
};

export const deleteExterno = async (req: Request, res: Response) => {
  try {
    const { id, email } = req.params;
    console.log("Deleting externo request with ID:", id, "and email:", email);
    const result = await requestService.deleteExternoRequest(Number(id), email);
    console.log("Externo request deleted successfully:", result);
    return res.json(result);
  } catch (error) {
    console.error("Error deleting externo request:", error);
    return res.status(500).json({ error: "Erro ao apagar marcação externa." });
  }
};

// ---------------------- ADMIN ----------------------
export const getAllRequests = async (_req: Request, res: Response) => {
  try {
    console.log("Fetching all requests for admin");
    const result = await requestService.listAllRequests();
    console.log("All requests fetched successfully:", result);
    return res.json(result);
  } catch (error) {
    console.error("Error fetching all requests:", error);
    return res.status(500).json({ error: "Erro ao listar todas as marcações." });
  }
};

export const deleteAllRequests = async (_req: Request, res: Response) => {
  try {
    console.log("Deleting all requests for admin");
    const result = await requestService.deleteAllRequests();
    console.log("All requests deleted successfully:", result);
    return res.json(result);
  } catch (error) {
    console.error("Error deleting all requests:", error);
    return res.status(500).json({ error: "Erro ao apagar todas as marcações." });
  }
};

export const updateStatusEstudante = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    console.log("Updating estudante status with ID:", id, "to status:", status);
    const result = await requestService.updateEstudanteStatus(Number(id), status);
    console.log("Estudante status updated successfully:", result);
    return res.json(result);
  } catch (error) {
    console.error("Error updating estudante status:", error);
    return res.status(500).json({ error: "Erro ao atualizar status do estudante." });
  }
};

export const updateStatusExterno = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    console.log("Updating externo status with ID:", id, "to status:", status);
    const result = await requestService.updateExternoStatus(Number(id), status);
    console.log("Externo status updated successfully:", result);
    return res.json(result);
  } catch (error) {
    console.error("Error updating externo status:", error);
    return res.status(500).json({ error: "Erro ao atualizar status do externo." });
  }
};
