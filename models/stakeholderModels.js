import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Stakeholder = db.define(
  "stakeholder",
  {
    id_stakeholder: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    stakeholderURL: {
      type: DataTypes.STRING,
    },
    nama: {
      type: DataTypes.STRING,
    },
    jabatan: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Stakeholder;

// (async () => {
//   await db.sync();
// })();
