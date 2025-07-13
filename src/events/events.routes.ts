import { Router } from "express";
import * as Controllers from "./events.controller";

const router = Router();

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



export default router;