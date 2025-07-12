import express from "express";
import { createEstudante, getEstudanteRequests, updateEstudante, deleteEstudante } from "./requests/request.controller";
import { createExterno, getExternoRequests, updateExterno, deleteExterno } from "./requests/request.controller";
import { getAllRequests, deleteAllRequests, updateStatusEstudante, updateStatusExterno } from "./requests/request.controller";
import { register, login, recoverPassword, deleteUser } from "./auth/auth.controller";
 
const app = express();

app.use(express.json());


// ------- AUTH -------
app.use("/register", register);
app.use("/login", login);
app.use("/recover", recoverPassword);
app.delete("/delete", deleteUser);

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

export default app;