import express from "express";
import {
  getCategory,
  getCategorybyId,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/category", getCategory);
router.get("/category/:id", getCategorybyId);
router.post("/category", createCategory);
router.patch("/category/:id", updateCategory);
router.delete("/category/:id", deleteCategory);
export default router;
