import express from "express";
 
const app = express();

app.use(express.json());

app.use("/teste", (req, res) => {
    res.status(200).json({ message: "Servidor já está a vir bem!"});
});

export default app;