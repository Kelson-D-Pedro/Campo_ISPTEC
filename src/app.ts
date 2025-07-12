import express from "express";
import { createEstudante, getEstudanteRequests, updateEstudante, deleteEstudante } from "./requests/request.controller";
import { createExterno, getExternoRequests, updateExterno, deleteExterno } from "./requests/request.controller";
import { getAllRequests, deleteAllRequests, updateStatusEstudante, updateStatusExterno } from "./requests/request.controller";
import { register, login, recoverPassword, deleteUser } from "./auth/auth.controller";
import { createJogoController, getJogosController, getJogoByIdController, updateJogoController, deleteJogoController } from "./events/events_controllers";
import { createMarcacaoController, getMarcacoesController, getMarcacaoByIdController, updateMarcacaoController, deleteMarcacaoController } from "./events/events_controllers";
import { createParticipacaoController, getParticipacoesController, getParticipacaoByIdController, updateParticipacaoController, deleteParticipacaoController } from "./events/events_controllers";
import { createTechnicianController, getTechniciansController, getTechnicianByIdController, updateTechnicianController, deleteTechnicianController } from "./events/events_controllers";
import { createEquipeController, getEquipesController, getEquipeByIdController, updateEquipeController, deleteEquipeController } from "./events/events_controllers";
import { createEventoController, getEventosController, getEventoByIdController, updateEventoController, deleteEventoController } from "./events/events_controllers";
 
const app = express();

app.use(express.json());


// ------- AUTH -------
app.use("/register", register);
app.use("/login", login);
app.use("/recover", recoverPassword);
app.delete("/delete/:id", deleteUser);

// ------- BD -------

// ------- ESTUDANTE -------
app.use("/estudante",createEstudante);
app.use("/estudante/:numeroEstudante",getEstudanteRequests);
app.put("/estudante/:id",updateEstudante);
app.delete("/estudante/:id",deleteEstudante);

// ------- EXTERNO -------
app.use("/externo",createExterno);
app.use("/externo/:email",getExternoRequests);
app.use("/externo/:id",updateExterno);
app.delete("/externo/:id",deleteExterno);

// ------- ADMIN -------
app.use("/admin/all",getAllRequests);
app.use("/admin/all",deleteAllRequests);
app.use("/admin/estudante/:id/status",updateStatusEstudante);
app.use("/admin/externo/:id/status",updateStatusExterno);

// ------- EVENTOS -------
app.use("/jogos", createJogoController);
app.use("/jogos", getJogosController);
app.use("/jogos/:id", getJogoByIdController);
app.put("/jogos/:id", updateJogoController);
app.delete("/jogos/:id", deleteJogoController);  

app.use("/marcacoes", createMarcacaoController);
app.use("/marcacoes", getMarcacoesController);
app.use("/marcacoes/:id", getMarcacaoByIdController);
app.put("/marcacoes/:id", updateMarcacaoController);
app.delete("/marcacoes/:id", deleteMarcacaoController);  

app.use("/participacoes", createParticipacaoController);
app.use("/participacoes", getParticipacoesController);
app.use("/participacoes/:id", getParticipacaoByIdController);
app.put("/participacoes/:id", updateParticipacaoController);     
app.delete("/participacoes/:id", deleteParticipacaoController);      

app.use("/technicians", createTechnicianController);
app.use("/technicians", getTechniciansController);
app.use("/technicians/:id", getTechnicianByIdController);
app.put("/technicians/:id", updateTechnicianController);
app.delete("/technicians/:id", deleteTechnicianController);

app.use("/equipes", createEquipeController);
app.use("/equipes", getEquipesController);
app.use("/equipes/:id", getEquipeByIdController);
app.put("/equipes/:id", updateEquipeController);
app.delete("/equipes/:id", deleteEquipeController);

app.use("/eventos", createEventoController);
app.use("/eventos", getEventosController);
app.use("/eventos/:id", getEventoByIdController);
app.put("/eventos/:id", updateEventoController);
app.delete("/eventos/:id", deleteEventoController);
export default app;