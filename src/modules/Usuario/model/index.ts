import { DataTypes, Sequelize } from "sequelize";
import connection from "../../../config";

const Usuario = connection.define("usuario", {
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
  salario: DataTypes.DECIMAL,
  descricao: DataTypes.STRING,
});
export default Usuario;
