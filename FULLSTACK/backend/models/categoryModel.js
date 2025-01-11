import { Sequelize } from "sequelize";
import db from "../config/database.js";
import user from "./userModel.js";

const { DataTypes } = Sequelize;

const category = db.define(
  "categorys",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: { notEmpty: true },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate: { notEmpty: true, len: [3, 100] },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { notEmpty: true },
    },
  },
  {
    freezeTableName: true,
  }
);

user.hasMany(category);
category.belongsTo(user, { foreignKey: "userId" });
export default category;
