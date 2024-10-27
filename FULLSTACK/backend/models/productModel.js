import { Sequelize } from "sequelize";
import db from "../config/database.js";
import category from "./categoryModel.js";
import user from "./userModel.js";

const { DataTypes } = Sequelize;

const product = db.define(
  "products",
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: { notEmpty: true },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true, len: [3, 100] },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { notEmpty: true },
    },
    status: {
      type: DataTypes.ENUM("tersedia", "tidak tersedia"),
      allowNull: false,
      validate: { notEmpty: true },
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: { notEmpty: true },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { notEmpty: true },
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

user.hasMany(product);
product.belongsTo(user, { foreignKey: "userId" });
category.hasMany(product);
product.belongsTo(category, { foreignKey: "categoryId" });

export default product;
