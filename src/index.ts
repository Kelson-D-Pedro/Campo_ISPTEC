import app from "./app";
import { createServer } from "http";

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const server = createServer(app);

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor rodando na porta http://192.168.0.122:${PORT}`);
});