import { DataTypes, Sequelize } from "sequelize";
import connection from "../../../config";

const Estoque = connection.define("estoque", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(155),
    allowNull: false,
  },
  // produtos:
  // id_user_respo:
  salario: DataTypes.DECIMAL,
  descricao: DataTypes.STRING,
});
export default Estoque;
