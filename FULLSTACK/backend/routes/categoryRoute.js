import express from "express";
import {
  getCategory,
  getCategorybyId,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";
import { verifyUser, adminOnly } from "../middleware/authUser.js";

const router = express.Router();

router.get("/category", getCategory);
router.get("/category/:id", getCategorybyId);
router.post("/category", verifyUser, adminOnly, createCategory);
router.patch("/category/:id", verifyUser, adminOnly, updateCategory);
router.delete("/category/:id", verifyUser, adminOnly, deleteCategory);
export default router;
