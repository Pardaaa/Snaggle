import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";
import path from "path";
import fs from "fs";

export const getProduct = async (req, res) => {
  try {
    let response;
    response = await Product.findAll({
      attributes: ["uuid", "name", "description", "price", "stok", "picture"],
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
    let response = {
      uuid: product.uuid,
      name: product.name,
      description: product.description,
      stok: product.stok,
      picture: product.picture,
      url: product.url,
      price: product.price,
      category: await product.getCategory({ attributes: ["name"] }),
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createProduct = async (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uplouded" });
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowType = [".png", ".jpg", ".jpeg"];
  const { name, price, description, stok, categoryId } = req.body;
  if (!allowType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });
  let userId = req.userId;
  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Product.create({
        name: name,
        description: description,
        price: price,
        stok: stok,
        picture: fileName,
        url: url,
        userId: userId,
        categoryId: categoryId,
      });
      res.status(201).json({ msg: "Product Created Succsesfully" });
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        const field = error.errors[0].path; 
        if (field === "name") {
          return res.status(400).json({ msg: "Nama sudah ada" });
        }
      }
      res.status(500).json({ msg: error.message });
    }
  });
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: { uuid: req.params.id },
    });

    if (!product) return res.status(404).json({ msg: "Data Tidak Ditemukan" });

    const {
      name = product.name,
      description = product.description,
      price = product.price,
      stok = product.stok,
    } = req.body;
    const categoryId = req.body.categoryId || product.categoryId;

    let updates = {
      name,
      description,
      price,
      stok,
      categoryId,
      picture: product.picture,
      url: product.url,
    };

    if (req.files && req.files.file) {
      const file = req.files.file;
      const ext = path.extname(file.name).toLowerCase();
      const fileSize = file.data.length;
      const allowType = [".png", ".jpg", ".jpeg"];

      if (!allowType.includes(ext))
        return res.status(422).json({ msg: "Invalid Image Format" });

      if (fileSize > 5000000)
        return res.status(422).json({ msg: "Image must be less than 5 MB" });

      const fileName = file.md5 + ext;
      const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
      updates.picture = fileName;
      updates.url = url;

      file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });

        if (product.picture) {
          const oldImagePath = `./public/images/${product.picture}`;
          if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath);
          }
        }
      });
    }

    if (req.role === "admin" || req.userId === product.userId) {
      await Product.update(updates, {
        where: { id: product.id },
      });
      return res.status(200).json({ msg: "Product updated successfully" });
    } else {
      return res.status(403).json({ msg: "Akses Terlarang" });
    }
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      const field = error.errors[0].path; 
      if (field === "name") {
        return res.status(400).json({ msg: "Nama sudah ada" });
      }
    }
    res.status(400).json({ msg: error.message });
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
    res.status(201).json({ msg: "Deleted Succsessfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getCustomerProductById = async (req, res) => {
  try {
      const product = await Product.findOne({
          where: { id: req.params.id },
      });

      if (!product) {
          return res.status(404).json({ message: "Product not found" });
      }

      res.json(product);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
  }
};