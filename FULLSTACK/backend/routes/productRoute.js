import express from "express";
import {
  getProduct,
  getProductbyId,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { verifyUser, adminOnly } from "../middleware/authUser.js";
const router = express.Router();

router.get("/product", getProduct);
router.get("/product/:id", getProductbyId);
router.post("/product", verifyUser, adminOnly, createProduct);
router.patch("/product/:id", verifyUser, adminOnly, updateProduct);
router.delete("/product/:id", verifyUser, adminOnly, deleteProduct);

app.get('/product/:id', (req, res) => {
  const { id } = req.params;
  // Misalkan kamu menggunakan database atau array produk
  const product = products.find(p => p._id === id);
  if (product) {
     res.json(product); // Kirim data produk sebagai response
  } else {
     res.status(404).send('Product not found');
  }
});

export default router;
