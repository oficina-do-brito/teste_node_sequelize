import express from "express";
import cors from "cors";
import routes from "./routes";
import connection from "./config";

const app = express();
app.use(cors());
app.use(express.json());

try {
  const connected = connection.authenticate();
  console.log(`Connection has been established successfully.${connected} devolvida esta connectando`);
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.use(routes);

app.listen(3333, () => {
  console.log("Api rodando com sucesso...");
});
