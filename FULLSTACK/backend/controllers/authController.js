import user from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    // Cari pengguna berdasarkan email
    const users = await user.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!users) {
      return res.status(404).json({ message: "User not found" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      users.password
    );
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: users.id, email: users.email },
      "your-secret-key",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
