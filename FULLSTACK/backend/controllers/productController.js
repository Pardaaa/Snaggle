import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";
import path from "path";

export const getProduct = async (req, res) => {
  try {
    let response;
    response = await Product.findAll({
      attributes: ["uuid", "name", "description", "price", "status", "picture"],
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
  const { name, price, description, status, categoryId } = req.body;
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
        status: status,
        picture: fileName,
        url: url,
        userId: userId,
        categoryId: categoryId,
      });
      res.status(201).json({ msg: "Product Created Succsesfully" });
    } catch (error) {
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
