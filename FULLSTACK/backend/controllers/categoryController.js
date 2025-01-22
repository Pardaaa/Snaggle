import Category from "../models/categoryModel.js";
import User from "../models/userModel.js"

export const getCategory = async (req, res) => {
  try {
    let response;
    response = await Category.findAll({
      attributes: ["uuid", "id", "name"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getCategorybyId = async (req, res) => {
  try {
    const category = await Category.findOne({
      where: { uuid: req.params.id },
    });
    if (!category) return res.status(404).json({ msg: "Data Tidak Ditemukan" });
    let response;
    response = await Category.findOne({
      attributes: ["uuid", "name"],
      where: {
        id: category.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createCategory = async (req, res) => {
  const { name } = req.body;
  let userId = req.userId;
  try {
    await Category.create({
      name: name,
      userId: userId,
    });
    res.status(201).json({ msg: "Category Created Succsesfully" });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      const field = error.errors[0].path; 
      if (field === "name") {
        return res.status(400).json({ msg: "Category sudah ada" });
      }
    }
    res.status(500).json({ msg: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findOne({
      where: { uuid: req.params.id },
    });
    if (!category) return res.status(404).json({ msg: "Data Tidak Ditemukan" });
    const { name } = req.body;
    if (req.role === "admin" || req.role === "staff") {
      await Category.update(
        { name: name },
        {
          where: { id: category.id },
        }
      );
    }
    res.status(200).json({ msg: "Category Updated" });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      const field = error.errors[0].path; 
      if (field === "name") {
        return res.status(400).json({ msg: "Category Sudah Ada" });
      }
    }
    res.status(500).json({ msg: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findOne({
      where: { uuid: req.params.id },
    });
    if (!category) return res.status(404).json({ msg: "Data Tidak Ditemukan" });
    if (req.role === "admin" || req.role === "staff") {
      await Category.destroy({
        where: { id: category.id },
      });
    }
    res.status(200).json({ msg: "Deleted Succsessfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
