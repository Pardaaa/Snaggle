import express from "express";
import { login, logout, Me, recoveryPassword } from "../controllers/authController.js";

const router = express.Router();

router.get("/me", Me);
router.post("/login", login);
router.patch("/recoveryPassword", recoveryPassword);
router.delete("/logout", logout);

export default router;
