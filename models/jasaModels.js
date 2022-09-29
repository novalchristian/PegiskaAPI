import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Jasa = db.define(
  "jasa",
  {
    id_jasa: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nama_jasa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    "20feet": {
      type: DataTypes.INTEGER,
    },
    "40feet": {
      type: DataTypes.INTEGER,
    },
    lcl: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Jasa;

// (async () => {
//   await db.sync();
// })();
