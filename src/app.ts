import express from "express";
import { createEstudante, getEstudanteRequests, updateEstudante, deleteEstudante } from "./requests/request.controller";
import { createExterno, getExternoRequests, updateExterno, deleteExterno } from "./requests/request.controller";
import { getAllRequests, deleteAllRequests, updateStatusEstudante, updateStatusExterno } from "./requests/request.controller";
import { register, login, recoverPassword, deleteUser, getUsers } from "./auth/auth.controller";
import { createJogoController, getJogosController, getJogoByIdController, updateJogoController, deleteJogoController } from "./events/events.controller";
import { createMarcacaoController, getMarcacoesController, getMarcacaoByIdController, updateMarcacaoController, deleteMarcacaoController } from "./events/events.controller";
import { createParticipacaoController, getParticipacoesController, getParticipacaoByIdController, updateParticipacaoController, deleteParticipacaoController } from "./events/events.controller";
import { createTechnicianController, getTechniciansController, getTechnicianByIdController, updateTechnicianController, deleteTechnicianController } from "./events/events.controller";
import { createEquipeController, getEquipesController, getEquipeByIdController, updateEquipeController, deleteEquipeController } from "./events/events.controller";
import { createEventoController, getEventosController, getEventoByIdController, updateEventoController, deleteEventoController } from "./events/events.controller";
import cors from 'cors'
import { get } from "http";
 
const app = express();
app.use(cors());
app.use(express.json());


// ------- AUTH -------
app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/recover", recoverPassword);
app.use("/api/delete/:id", deleteUser);
app.use("/api/getUsers", getUsers);

// ------- BD -------

// ------- ESTUDANTE -------
app.use("/api/estudante",createEstudante);
app.use("/api/estudante/:numeroEstudante",getEstudanteRequests);
app.put("/api/estudante/:id",updateEstudante);
app.use("/api/estudante/:id",deleteEstudante);

// ------- EXTERNO -------
app.use("/api/externo",createExterno);
app.use("/api/externo/:email",getExternoRequests);
app.use("/api/externo/:id",updateExterno);
app.use("/api/externo/:id",deleteExterno);

// ------- ADMIN -------
app.use("/api/admin/all",getAllRequests);
app.use("/api/admin/all",deleteAllRequests);
app.use("/api/admin/estudante/:id/status",updateStatusEstudante);
app.use("/api/admin/externo/:id/status",updateStatusExterno);

// ------- EVENTOS -------
app.use("/api/jogos", createJogoController);
app.use("/api/jogos", getJogosController);
app.use("/api/jogos/:id", getJogoByIdController);
app.use("/api/jogos/:id", updateJogoController);
app.use("/api/jogos/:id", deleteJogoController);  

app.use("/api/marcacoes", createMarcacaoController);
app.use("/api/marcacoes", getMarcacoesController);
app.use("/api/marcacoes/:id", getMarcacaoByIdController);
app.use("/api/marcacoes/:id", updateMarcacaoController);
app.use("/api/marcacoes/:id", deleteMarcacaoController);  

app.use("/api/participacoes", createParticipacaoController);
app.use("/api/participacoes", getParticipacoesController);
app.use("/api/participacoes/:id", getParticipacaoByIdController);
app.use("/api/participacoes/:id", updateParticipacaoController);     
app.use("/api/participacoes/:id", deleteParticipacaoController);      

app.use("/api/technicians", createTechnicianController);
app.use("/api/technicians", getTechniciansController);
app.use("/api/technicians/:id", getTechnicianByIdController);
app.use("/api/technicians/:id", updateTechnicianController);
app.use("/api/technicians/:id", deleteTechnicianController);

app.use("/api/equipes", createEquipeController);
app.use("/api/equipes", getEquipesController);
app.use("/api/equipes/:id", getEquipeByIdController);
app.use("/api/equipes/:id", updateEquipeController);
app.use("/api/equipes/:id", deleteEquipeController);

app.use("/api/eventos", createEventoController);
app.use("/api/eventos", getEventosController);
app.use("/api/eventos/:id", getEventoByIdController);
app.use("/api/eventos/:id", updateEventoController);
app.use("/api/eventos/:id", deleteEventoController);

export default app;