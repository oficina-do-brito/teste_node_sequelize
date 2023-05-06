import express from "express";
import cors from "cors";
import routes from "./routes";
import connection from "./config";
// models
import Produto from "./modules/Produto/model";
import Usuario from "./modules/Usuario/model";
import Estoque from "./modules/Estoque/model";

const app = express();
app.use(cors());
app.use(express.json());

try {
  const connected = conectou();
  if (connected) {
    console.log(
      `Connection has been established successfully. "${connected}" `
    );
    async () => {
      await connection.sync({ force: true });
    };
  }
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.use(routes);

app.listen(3333, () => {
  console.log("Api rodando com sucesso...");
});

function conectou(): boolean {
  const conectado = connection.authenticate().then((res) => res);
  if (conectado != undefined) {
    return true;
  }
  return false;
}
