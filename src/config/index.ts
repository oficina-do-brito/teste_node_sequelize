import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres", "postgres", "postgres", {
  host: "db",
  dialect: "postgres",
});
export default sequelize;
