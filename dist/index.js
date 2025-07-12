"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http_1 = require("http");
// const PORT = process.env.PORT || 3000;
const server = (0, http_1.createServer)(app_1.default);
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://192.168.100.88:${PORT}`);
});
