import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Pesanan = db.define(
  "pesanan",
  {
    id_pesanan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    noWa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    namaPerusahaan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamatPerusahaan: {
      type: DataTypes.STRING,
    },
    nib: {
      type: DataTypes.STRING,
    },
    ktpDirektur: {
      type: DataTypes.STRING,
    },
    npwpPerusahaan: {
      type: DataTypes.STRING,
    },
    aktaPendirian: {
      type: DataTypes.STRING,
    },
    aktaPerubahan: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Pesanan;

// (async () => {
//   await db.sync();
// })();
