"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const requestController = __importStar(require("./request.controller"));
const middleware = __importStar(require("./request.middleware"));
const router = (0, express_1.Router)();
router.use(middleware.logRequests);
// ------- ESTUDANTE -------
router.post("/api/estudante", middleware.sanitizeData, middleware.validateEstudanteData, requestController.createEstudante);
router.get("/api/estudante/:numeroEstudante", middleware.validateNumeroEstudante, middleware.logEstudanteOperation, requestController.getEstudanteRequests);
router.put("/api/estudante/:id", middleware.validateIdParam, middleware.sanitizeData, middleware.logEstudanteOperation, requestController.updateEstudante);
router.delete("/api/estudante/:id", middleware.validateIdParam, middleware.logEstudanteOperation, requestController.deleteEstudante);
// ------- EXTERNO -------
router.post("/api/externo", middleware.sanitizeData, middleware.validateExternoData, requestController.createExterno);
router.get("/api/externo/:email", middleware.validateEmailParam, middleware.logExternoOperation, requestController.getExternoRequests);
router.put("/api/externo/:id", middleware.validateIdParam, middleware.sanitizeData, middleware.logExternoOperation, requestController.updateExterno);
router.delete("/api/externo/:id", middleware.validateIdParam, middleware.logExternoOperation, requestController.deleteExterno);
// ------- ADMIN -------
router.get("/api/admin/all", requestController.getAllRequests);
router.delete("/api/admin/all", requestController.deleteAllRequests);
router.patch("/api/admin/estudante/:id/status", middleware.validateIdParam, middleware.validateStatusUpdate, requestController.updateStatusEstudante);
router.patch("/api/admin/externo/:id/status", middleware.validateIdParam, middleware.validateStatusUpdate, requestController.updateStatusExterno);
// Middleware de tratamento de erros (deve ser o último)
router.use(middleware.errorHandler);
exports.default = router;
