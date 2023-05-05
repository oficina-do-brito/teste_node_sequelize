import { Sequelize } from "sequelize";

//                              database', 'username', 'password',
const connection = new Sequelize("postgres", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});
export default connection;
