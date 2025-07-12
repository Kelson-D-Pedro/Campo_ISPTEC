import { Request, Response } from "express";
import * as eventService from "./events_services";

// -------------------------- EVENTS ---------------------------


// Criar evento
export const createEventoController = async (req: Request, res: Response) => {
  try {
    console.log("Creating evento:", req.body);
    const result = await eventService.createEvento(req.body);
    console.log("Evento created:", result);
    return res.status(201).json(result);
  } catch (error) {
    console.error("Error creating evento:", error);
    return res.status(500).json({ error: "Erro ao criar evento." });
  }
};

// Listar eventos
export const getEventosController = async (_req: Request, res: Response) => {
  try {
    console.log("Fetching all eventos");
    const result = await eventService.getEventos();
    return res.status(201).json(result);
  } catch (error) {
    console.error("Error fetching eventos:", error);
    return res.status(500).json({ error: "Erro ao listar eventos." });
  }
};

// Buscar evento por ID
export const getEventoByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log("Fetching evento with ID:", id);
    const result = await eventService.getEventoById(Number(id));
    return res.status(201).json(result);
  } catch (error) {
    console.error("Error fetching evento:", error);
    return res.status(500).json({ error: "Erro ao obter evento." });
  }
};

// Atualizar evento
export const updateEventoController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log("Updating evento with ID:", id);
    const result = await eventService.updateEvento(Number(id), req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.error("Error updating evento:", error);
    return res.status(500).json({ error: "Erro ao atualizar evento." });
  }
};

// Deletar evento
export const deleteEventoController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log("Deleting evento with ID:", id);
    const result = await eventService.deleteEvento(Number(id));
    return res.status(201).json(result);
  } catch (error) {
    console.error("Error deleting evento:", error);
    return res.status(500).json({ error: "Erro ao deletar evento." });
  }
};


// --------------------------- TEAMS ----------------------------

export const createEquipeController = async (req: Request, res: Response) => {
  try {
    console.log("Creating equipe:", req.body);
    const result = await eventService.createEquipe(req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao criar equipe:", error);
    return res.status(500).json({ error: "Erro ao criar equipe." });
  }
};

export const getEquipesController = async (_req: Request, res: Response) => {
  try {
    const result = await eventService.getEquipes();
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao listar equipes:", error);
    return res.status(500).json({ error: "Erro ao listar equipes." });
  }
};

export const getEquipeByIdController = async (req: Request, res: Response) => {
  try {
    const result = await eventService.getEquipeById(Number(req.params.id));
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao obter equipe:", error);
    return res.status(500).json({ error: "Erro ao buscar equipe." });
  }
};

export const updateEquipeController = async (req: Request, res: Response) => {
  try {
    const result = await eventService.updateEquipe(Number(req.params.id), req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao atualizar equipe:", error);
    return res.status(500).json({ error: "Erro ao atualizar equipe." });
  }
};

export const deleteEquipeController = async (req: Request, res: Response) => {
  try {
    const result = await eventService.deleteEquipe(Number(req.params.id));
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao deletar equipe:", error);
    return res.status(500).json({ error: "Erro ao deletar equipe." });
  }
};

// ----------------------------- MATCH --------------------------

export const createJogoController = async (req: Request, res: Response) => {
  try {
    console.log("Creating jogo:", req.body);
    const result = await eventService.createJogo(req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao criar jogo:", error);
    return res.status(500).json({ error: "Erro ao criar jogo." });
  }
};

export const getJogosController = async (_req: Request, res: Response) => {
  try {
    const result = await eventService.getJogos();
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao listar jogos:", error);
    return res.status(500).json({ error: "Erro ao listar jogos." });
  }
};

export const getJogoByIdController = async (req: Request, res: Response) => {
  try {
    const result = await eventService.getJogoById(Number(req.params.id));
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao buscar jogo:", error);
    return res.status(500).json({ error: "Erro ao buscar jogo." });
  }
};

export const updateJogoController = async (req: Request, res: Response) => {
  try {
    const result = await eventService.updateJogo(Number(req.params.id), req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao atualizar jogo:", error);
    return res.status(500).json({ error: "Erro ao atualizar jogo." });
  }
};

export const deleteJogoController = async (req: Request, res: Response) => {
  try {
    const result = await eventService.deleteJogo(Number(req.params.id));
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao deletar jogo:", error);
    return res.status(500).json({ error: "Erro ao deletar jogo." });
  }
};


// -------------------------- RESERVATION ----------------------

export const createMarcacaoController = async (req: Request, res: Response) => {
  try {
    console.log("Creating marcacao:", req.body);
    const result = await eventService.createMarcacao(req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao criar marcacao:", error);
    return res.status(500).json({ error: "Erro ao criar marcacao." });
  }
};

export const getMarcacoesController = async (_req: Request, res: Response) => {
  try {
    const result = await eventService.getMarcacoes();
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao listar marcacoes:", error);
    return res.status(500).json({ error: "Erro ao listar marcacoes." });
  }
};

export const getMarcacaoByIdController = async (req: Request, res: Response) => {
  try {
    const result = await eventService.getMarcacaoById(Number(req.params.id));
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao buscar marcacao:", error);
    return res.status(500).json({ error: "Erro ao buscar marcacao." });
  }
};

export const updateMarcacaoController = async (req: Request, res: Response) => {
  try {
    const result = await eventService.updateMarcacao(Number(req.params.id), req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao atualizar marcacao:", error);
    return res.status(500).json({ error: "Erro ao atualizar marcacao." });
  }
};

export const deleteMarcacaoController = async (req: Request, res: Response) => {
  try {
    const result = await eventService.deleteMarcacao(Number(req.params.id));
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao deletar marcacao:", error);
    return res.status(500).json({ error: "Erro ao deletar marcacao." });
  }
};


// ------------------------- TEAM PARTICIPATION -------------------

export const createParticipacaoController = async (req: Request, res: Response) => {
  try {
    const result = await eventService.createParticipacaoEquipe(req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao criar participacao:", error);
    return res.status(500).json({ error: "Erro ao criar participacao." });
  }
};

export const getParticipacoesController = async (_req: Request, res: Response) => {
  try {
    const result = await eventService.getParticipacoesEquipe();
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao listar participacoes:", error);
    return res.status(500).json({ error: "Erro ao listar participacoes." });
  }
};

export const getParticipacaoByIdController = async (req: Request, res: Response) => {
  try {
    const result = await eventService.getParticipacaoEquipeById(Number(req.params.id));
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao buscar participacao:", error);
    return res.status(500).json({ error: "Erro ao buscar participacao." });
  }
};

export const updateParticipacaoController = async (req: Request, res: Response) => {
  try {
    const result = await eventService.updateParticipacaoEquipe(Number(req.params.id), req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao atualizar participacao:", error);
    return res.status(500).json({ error: "Erro ao atualizar participacao." });
  }
};

export const deleteParticipacaoController = async (req: Request, res: Response) => {
  try {
    const result = await eventService.deleteParticipacaoEquipe(Number(req.params.id));
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao deletar participacao:", error);
    return res.status(500).json({ error: "Erro ao deletar participacao." });
  }
};


// ---------------------------- TECHNICIAN -------------------------


export const createTechnicianController = async (req: Request, res: Response) => {
  try {
    const result = await eventService.createTechnician(req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao criar tecnico:", error);
    return res.status(500).json({ error: "Erro ao criar tecnico." });
  }
};

export const getTechniciansController = async (_req: Request, res: Response) => {
  try {
    const result = await eventService.getTechnicians();
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao listar tecnicos:", error);
    return res.status(500).json({ error: "Erro ao listar tecnicos." });
  }
};

export const getTechnicianByIdController = async (req: Request, res: Response) => {
  try {
    const result = await eventService.getTechnicianById(Number(req.params.id));
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao buscar tecnico:", error);
    return res.status(500).json({ error: "Erro ao buscar tecnico." });
  }
};

export const updateTechnicianController = async (req: Request, res: Response) => {
  try {
    const result = await eventService.updateTechnician(Number(req.params.id), req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao atualizar tecnico:", error);
    return res.status(500).json({ error: "Erro ao atualizar tecnico." });
  }
};

export const deleteTechnicianController = async (req: Request, res: Response) => {
  try {
    const result = await eventService.deleteTechnician(Number(req.params.id));
    return res.status(201).json(result);
  } catch (error) {
    console.error("Erro ao deletar tecnico:", error);
    return res.status(500).json({ error: "Erro ao deletar tecnico." });
  }
};


