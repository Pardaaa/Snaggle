import Category from "../models/categoryModel.js";

export const getCategory = async (req, res) => {
  try {
    const userId = req.userId;
    let response;

    if (req.role === "admin") {
      response = await Category.findAll({
        attributes: ["uuid", "id", "name"],
      });
    } else {
      response = await Category.findAll({
        where: { userId },
        attributes: ["uuid", "id", "name"],
      });
    }

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

    if (req.role === "admin" || category.userId === req.userId) {
      res.status(200).json(category);
    } else {
      res.status(403).json({ msg: "Akses Terlarang" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createCategory = async (req, res) => {
  const { name } = req.body;
  const userId = req.userId;

  try {
    await Category.create({
      name: name,
      userId: userId,
    });
    res.status(201).json({ msg: "Category Created Successfully" });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      const field = error.errors[0].path;
      if (field === "name") {
        return res.status(400).json({ msg: "Category already exists" });
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

    if (req.role === "admin" || category.userId === req.userId) {
      const { name } = req.body;
      await Category.update(
        { name: name },
        {
          where: { id: category.id },
        }
      );
      res.status(200).json({ msg: "Category Updated" });
    } else {
      res.status(403).json({ msg: "Akses Terlarang" });
    }
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      const field = error.errors[0].path;
      if (field === "name") {
        return res.status(400).json({ msg: "Category already exists" });
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

    if (req.role === "admin" || category.userId === req.userId) {
      await Category.destroy({
        where: { id: category.id },
      });
      res.status(200).json({ msg: "Category Deleted Successfully" });
    } else {
      res.status(403).json({ msg: "Akses Terlarang" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
