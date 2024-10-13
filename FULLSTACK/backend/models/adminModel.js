import { Sequelize } from "sequelize";
import db from "../config/database";

const { DataTypes } = Sequelize;

const user = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING(100),
  },
  {
    freezeTableName: true,
  }
);

export default user;
(async () => {
  await db.sync();
})();
