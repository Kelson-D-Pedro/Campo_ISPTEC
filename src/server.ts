import express from "express";
import requestRoutes from "./requests/request.routes";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/requests", requestRoutes);

app.get("/", (req, res) => {
  res.send("API de marcações rodando!");
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
