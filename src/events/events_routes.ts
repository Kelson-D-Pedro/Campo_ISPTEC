import { Router } from "express";
import * as Controllers from "./events_controllers";

const router = Router();

router.post("/jogos", Controllers.createJogoController);
router.get("/jogos", Controllers.getJogosController);
router.get("/jogos/:id", Controllers.getJogoByIdController);
router.put("/jogos/:id", Controllers.updateJogoController);
router.delete("/jogos/:id", Controllers.deleteJogoController);


router.post("/marcacoes", Controllers.createMarcacaoController);
router.get("/marcacoes", Controllers.getMarcacoesController);
router.get("/marcacoes/:id", Controllers.getMarcacaoByIdController);
router.put("/marcacoes/:id", Controllers.updateMarcacaoController);
router.delete("/marcacoes/:id", Controllers.deleteMarcacaoController);


router.post("/participacoes", Controllers.createParticipacaoController);
router.get("/participacoes", Controllers.getParticipacoesController);
router.get("/participacoes/:id", Controllers.getParticipacaoByIdController);
router.put("/participacoes/:id", Controllers.updateParticipacaoController);
router.delete("/participacoes/:id", Controllers.deleteParticipacaoController);

router.post("/technicians", Controllers.createTechnicianController);
router.get("/technicians", Controllers.getTechniciansController);
router.get("/technicians/:id", Controllers.getTechnicianByIdController);
router.put("/technicians/:id", Controllers.updateTechnicianController);
router.delete("/technicians/:id", Controllers.deleteTechnicianController);

router.post("/equipes", Controllers.createEquipeController);
router.get("/equipes", Controllers.getEquipesController);
router.get("/equipes/:id", Controllers.getEquipeByIdController);
router.put("/equipes/:id", Controllers.updateEquipeController);
router.delete("/equipes/:id", Controllers.deleteEquipeController);

router.post("/eventos", Controllers.createEventoController);
router.get("/eventos", Controllers.getEventosController);
router.get("/eventos/:id", Controllers.getEventoByIdController);
router.put("/eventos/:id", Controllers.updateEventoController);
router.delete("/eventos/:id", Controllers.deleteEventoController);



export default router;