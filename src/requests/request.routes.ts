import { Router } from "express";
import * as requestController from "./request.controller";
import * as middleware from "./request.middleware";

const router = Router();

router.use(middleware.logRequests);

// ------- ESTUDANTE -------
router.post(
  "/estudante",
  middleware.sanitizeData,
  middleware.validateEstudanteData,
  requestController.createEstudante
);

router.get(
  "/estudante/:numeroEstudante",
  middleware.validateNumeroEstudante,
  middleware.logEstudanteOperation,
  requestController.getEstudanteRequests
);

router.put(
  "/estudante/:id",
  middleware.validateIdParam,
  middleware.sanitizeData,
  middleware.logEstudanteOperation,
  requestController.updateEstudante
);

router.delete(
  "/estudante/:id",
  middleware.validateIdParam,
  middleware.logEstudanteOperation,
  requestController.deleteEstudante
);

// ------- EXTERNO -------
router.post(
  "/externo",
  middleware.sanitizeData,
  middleware.validateExternoData,
  requestController.createExterno
);

router.get(
  "/externo/:email",
  middleware.validateEmailParam,
  middleware.logExternoOperation,
  requestController.getExternoRequests
);

router.put(
  "/externo/:id",
  middleware.validateIdParam,
  middleware.sanitizeData,
  middleware.logExternoOperation,
  requestController.updateExterno
);

router.delete(
  "/externo/:id",
  middleware.validateIdParam,
  middleware.logExternoOperation,
  requestController.deleteExterno
);

// ------- ADMIN -------
router.get("/admin/all", requestController.getAllRequests);

router.delete("/admin/all", requestController.deleteAllRequests);

router.patch(
  "/admin/estudante/:id/status",
  middleware.validateIdParam,
  middleware.validateStatusUpdate,
  requestController.updateStatusEstudante
);

router.patch(
  "/admin/externo/:id/status",
  middleware.validateIdParam,
  middleware.validateStatusUpdate,
  requestController.updateStatusExterno
);

// Middleware de tratamento de erros (deve ser o último)
router.use(middleware.errorHandler);

export default router;
