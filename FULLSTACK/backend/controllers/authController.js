import User from "../models/userModel.js";
import argon2 from "argon2";

export const login = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (!user) {
    return res.status(404).json({ msg: "User Tidak Ditemukan" });
  }
  const match = await argon2.verify(user.password, req.body.password);
  if (!match) return res.status(400).json({ msg: "Password Salah" });
  req.session.userId = user.uuid;
  const uuid = user.uuid;
  const name = user.name;
  const email = user.email;
  const role = user.role;
  res.status(200).json({ uuid, name, email, role });
};

export const Me = async (req, res) => {
  if (!req.session.userId)
    return res.status(401).json({ msg: "Mohon Login Ke Akun Anda" });
  const user = await User.findOne({
    attributes: ["uuid", "name", "email", "role"],
    where: {
      uuid: req.session.userId,
    },
  });

  if (!user) {
    return res.status(404).json({ msg: "User Tidak Ditemukan" });
  }
  res.status(200).json(user);
};

export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Tidak Dapat LogOut" });
    res.status(200).json({ msg: "Anda Telah LogOut" });
  });
};

export const recoveryPassword = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.status(404).json({ msg: "User Tidak Ditemukan" });
    }

    const match = await argon2.verify(user.password, req.body.password);
    if (!match) {
      return res.status(400).json({ msg: "Password Lama Tidak Cocok" });
    }
    if (req.body.password.length < 8 || req.body.confPassword.length < 8) {
      return res.status(400).json({msg: "Panjang Karakter Password minimal 8"})
    }
    if (req.body.newPassword !== req.body.confPassword) {
      return res
        .status(400)
        .json({ msg: "Password Baru dan Konfirmasi Tidak Cocok" });
    }

    const hashPassword = await argon2.hash(req.body.newPassword);

    await User.update(
      { password: hashPassword },
      {
        where: {
          email: req.body.email,
        },
      }
    );

    res.status(200).json({ msg: "Password Berhasil Diubah" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const forgetPassword = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.status(404).json({ msg: "User Tidak Ditemukan" });
    }

    if (req.body.newPassword.length < 8 || req.body.confPassword.length < 8) {
      return res.status(400).json({msg: "Panjang Karakter Password minimal 8"})
    }
    if (req.body.newPassword !== req.body.confPassword) {
      return res.status(400).json({ msg: "Password Baru dan Konfirmasi Tidak Cocok" });
    }

    const hashPassword = await argon2.hash(req.body.newPassword);

    await User.update(
      { password: hashPassword },
      {
        where: {
          email: req.body.email,
        },
      }
    );

    res.status(200).json({ msg: "Password Berhasil Diubah" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

