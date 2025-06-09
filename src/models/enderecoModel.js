import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Endereco = sequelize.define("Endereco", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "clientes",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  rua: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  cep: {
    type: DataTypes.STRING(9),
    allowNull: false,
  },
});
