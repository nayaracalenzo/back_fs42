import express from "express";
import sequelize from "./config/db.js";
import router from "./routes/router.js";

const app = express();

app.use(express.json());

//rotas
app.use("/api", router);

//Sincronizar as tabelas do banco
sequelize
  .sync()
  .then(() => {
    console.log("Banco de Dados sincronizado com sucesso.");
  })
  .catch((error) => {
    console.error("Erro ao sincronizar o banco de dados: ", error);
  });

export default app;
