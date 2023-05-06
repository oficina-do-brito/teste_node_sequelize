import { DataTypes, Sequelize } from "sequelize";
import connection from "../../../config";

const Produto = connection.define("produto", {
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
  quantidade: DataTypes.INTEGER,
  descricao: DataTypes.STRING,
});
export default Produto;
