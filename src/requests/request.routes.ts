import { Router } from "express";
import * as requestController from "./request.controller";
import * as middleware from "./request.middleware";

const router = Router();

router.use(middleware.logRequests);

// ------- ESTUDANTE -------
router.post(
  "/api/estudante",
  middleware.sanitizeData,
  middleware.validateEstudanteData,
  requestController.createEstudante
);

router.get(
  "/api/estudante/:numeroEstudante",
  middleware.validateNumeroEstudante,
  middleware.logEstudanteOperation,
  requestController.getEstudanteRequests
);

router.put(
  "/api/estudante/:id",
  middleware.validateIdParam,
  middleware.sanitizeData,
  middleware.logEstudanteOperation,
  requestController.updateEstudante
);

router.delete(
  "/api/estudante/:id",
  middleware.validateIdParam,
  middleware.logEstudanteOperation,
  requestController.deleteEstudante
);

// ------- EXTERNO -------
router.post("/api/externo",
  middleware.sanitizeData,
  middleware.validateExternoData,
  requestController.createExterno
);

router.get(
  "/api/externo/:email",
  middleware.validateEmailParam,
  middleware.logExternoOperation,
  requestController.getExternoRequests
);

router.put(
  "/api/externo/:id",
  middleware.validateIdParam,
  middleware.sanitizeData,
  middleware.logExternoOperation,
  requestController.updateExterno
);

router.delete(
  "/api/externo/:id",
  middleware.validateIdParam,
  middleware.logExternoOperation,
  requestController.deleteExterno
);

// ------- ADMIN -------
router.get("/api/admin/all", requestController.getAllRequests);

router.delete("/api/admin/all", requestController.deleteAllRequests);

router.patch(
  "/api/admin/estudante/:id/status",
  middleware.validateIdParam,
  middleware.validateStatusUpdate,
  requestController.updateStatusEstudante
);

router.patch(
  "/api/admin/externo/:id/status",
  middleware.validateIdParam,
  middleware.validateStatusUpdate,
  requestController.updateStatusExterno
);

// Middleware de tratamento de erros (deve ser o último)
router.use(middleware.errorHandler);

export default router;
