import { create } from "domain";
import app from "./app";
import { createServer } from "http";
import { response } from "express";

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const server = createServer(app);

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor rodando na porta http://192.168.1.123:${PORT}`);
});