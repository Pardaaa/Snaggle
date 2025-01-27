import User from "../models/userModel.js";
import argon2 from "argon2";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: ["uuid", "name", "email", "role"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUsersbyId = async (req, res) => {
  try {
    const response = await User.findOne({
      attributes: ["uuid", "name", "email", "role"],
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createUsers = async (req, res) => {
  const { name, email, password, confirmPassword, role } = req.body;
  if (password.length < 8 || confirmPassword.length < 8) {
    return res.status(400).json({msg: "Panjang Karakter Password minimal 8"})
  }
  if (!password || password !== confirmPassword) {
    return res.status(400).json({ msg: "Password dan Confirm Password Tidak Cocok!" });
  }
  const hashPassword = await argon2.hash(password);
  try {
    await User.create({
      name: name,
      email: email,
      password: hashPassword,
      role: role,
    });
    res.status(201).json({ msg: "Register Berhasil" });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      const field = error.errors[0].path; 

      if (field === "email") {
        return res.status(400).json({ msg: "Email sudah digunakan" });
      }

      if (field === "name") {
        return res.status(400).json({ msg: "Nama sudah ada" });
      }
    }
    res.status(400).json({ msg: error.message });
  }
};

export const updateUsers = async (req, res) => {
  const user = await User.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User Tidak Ditemukan!" });

  const { name, email, password, confPassword, role } = req.body;
  let hashPassword = user.password;

  if (password) {
    if (password.length < 8 || confPassword.length < 8) {
      return res.status(400).json({msg: "Panjang Karakter Password minimal 8"})
    }
    if (password !== confPassword) {
      return res
        .status(400).json({ msg: "Password dan Confirm Password tidak cocok!" });
    }
    hashPassword = await argon2.hash(password);
  }

  try {
    await User.update(
      {
        name: name,
        email: email,
        password: hashPassword,
        role: role,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    res.status(201).json({ msg: "User Updated" });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      const field = error.errors[0].path; 

      if (field === "email") {
        return res.status(400).json({ msg: "Email sudah digunakan" });
      }

      if (field === "name") {
        return res.status(400).json({ msg: "Nama sudah ada" });
      }
    }
    res.status(400).json({ msg: error.message });
  }
};

export const deleteUsers = async (req, res) => {
  const user = await User.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User Tidak Ditemukan!" });
  try {
    await User.destroy({
      where: {
        id: user.id,
      },
    });
    res.status(201).json({ msg: "User Deleted" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
