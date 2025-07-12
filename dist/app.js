"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/teste", (req, res) => {
    res.status(200).json({ message: "Servidor já está a vir bem!" });
});
//app.use("admin/all", )
//app.use("/api", apiRoutes); // Uncomment and define apiRoutes if needed
exports.default = app;
