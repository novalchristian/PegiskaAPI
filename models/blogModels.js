import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Blog = db.define(
  "blog",
  {
    id_blog: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    gambar: {
      type: DataTypes.STRING,
    },
    judul: {
      type: DataTypes.STRING,
    },
    isi: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Blog;

// (async () => {
//   await db.sync();
// })();
