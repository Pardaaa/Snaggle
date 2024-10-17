import express from "express";
import {
  getUsers,
  getUsersbyId,
  createUsers,
  updateUsers,
  deleteUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUsersbyId);
router.post("/users", createUsers);
export default router;
