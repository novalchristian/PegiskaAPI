import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Session = db.define(
  "session",
  {
    id_session: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_user: {
      type: DataTypes.INTEGER,
    },
    session: {
      type: DataTypes.STRING,
    },
    expired_value: {
      type: DataTypes.INTEGER,
    },
    expired_at: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Session;

// (async () => {
//   await db.sync();
// })();
