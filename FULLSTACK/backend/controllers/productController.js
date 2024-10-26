import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";

export const getProduct = async (req, res) => {
  try {
    let response;
    response = await Product.findAll({
      attributes: ["uuid", "name"],
      include: [{ model: Category, attributes: ["name"] }],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductbyId = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: { uuid: req.params.id },
    });
    if (!product) return res.status(404).json({ msg: "Data Tidak Ditemukan" });
    let response;
    response = await Product.findOne({
      attributes: ["uuid", "name"],
      where: {
        id: product.id,
      },
      include: [{ model: Category, attributes: ["name"] }],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, categoryId } = req.body;
  let userId = req.userId;

  try {
    await Product.create({
      name: name,
      userId: userId,
      categoryId: categoryId,
    });
    res.status(201).json({ msg: "Product Created Succsesfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: { uuid: req.params.id },
    });
    if (!product) return res.status(404).json({ msg: "Data Tidak Ditemukan" });
    const { name, categoryId } = req.body;
    if (req.role === "admin") {
      await Product.update(
        { name: name, categoryId: categoryId },
        {
          where: { id: product.id },
        }
      );
    }
    res.status(200).json({ msg: "Product Updated Successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: { uuid: req.params.id },
    });
    if (!product) return res.status(404).json({ msg: "Data Tidak Ditemukan" });
    if (req.role === "admin") {
      await Product.destroy({
        where: { id: product.id },
      });
    }
    res.status(200).json({ msg: "Deleted Succsessfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
