import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";
import fs from "fs";
import path from "path";

export const getProduct = async (req, res) => {
  try {
    let response;
    response = await Product.findAll({
      attributes: ["uuid", "name", "description", "price", "status", "picture"],
      include: [{ model: Category, attributes: ["name"] }],
    });
    const responseWithImages = response.map((product) => ({
      ...product.toJSON(),
      picture: product.picture ? product.picture.toString("base64") : null,
    }));
    res.status(200).json(responseWithImages);
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
    let response = {
      uuid: product.uuid,
      name: product.name,
      description: product.description,
      price: product.price,
      picture: product.picture ? product.picture.toString("base64") : null,
      category: await product.getCategory({ attributes: ["name"] }),
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, description, status, categoryId } = req.body;
  let userId = req.userId;
  try {
    let picture = null;
    if (req.file) {
      picture = fs.readFileSync(req.file.path);
      fs.unlinkSync(req.file.path);
    }
    await Product.create({
      name: name,
      description: description,
      price: price,
      status: status,
      picture: picture,
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

    const { name, description, price, status, categoryId } = req.body;
    let updates = { name, description, price, status, categoryId };
    if (req.file) {
      updates.picture = fs.readFileSync(req.file.path);
    }

    if (req.role === "admin") {
      await Product.update(updates, {
        where: { id: product.id },
      });
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
