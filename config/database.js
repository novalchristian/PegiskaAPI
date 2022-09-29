import { Sequelize } from "sequelize";

const db = new Sequelize("pegiska", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
