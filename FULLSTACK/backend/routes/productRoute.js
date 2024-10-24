import express from "express";
import {
  getProduct,
  getProductbyId,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/product", getProduct);
router.get("/product/:id", getProductbyId);
router.post("/product", createProduct);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);
export default router;
