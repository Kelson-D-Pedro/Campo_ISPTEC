import { Router } from "express";
import * as requestController from "./request.controller";

const router = Router();

// ------- ESTUDANTE -------
router.post("/estudante", requestController.createEstudante);
router.get("/estudante/:numeroEstudante", requestController.getEstudanteRequests);
router.put("/estudante/:id", requestController.updateEstudante);
router.delete("/estudante/:id", requestController.deleteEstudante);

// ------- EXTERNO -------
router.post("/externo", requestController.createExterno);
router.get("/externo/:email", requestController.getExternoRequests);
router.put("/externo/:id", requestController.updateExterno);
router.delete("/externo/:id", requestController.deleteExterno);

// ------- ADMIN -------
router.get("/admin/all", requestController.getAllRequests);
router.delete("/admin/all", requestController.deleteAllRequests);
router.patch("/admin/estudante/:id/status", requestController.updateStatusEstudante);
router.patch("/admin/externo/:id/status", requestController.updateStatusExterno);

export default router;
