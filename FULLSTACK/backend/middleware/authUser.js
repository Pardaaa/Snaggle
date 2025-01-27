import User from "../models/userModel.js";

export const verifyUser = async (req, res, next) => {
  if (!req.session.userId)
    return res.status(401).json({ msg: "Mohon Login Ke Akun Anda" });
  const user = await User.findOne({
    where: {
      uuid: req.session.userId,
    },
  });

  if (!user) {
    return res.status(404).json({ message: "User Tidak Ditemukan" });
  }
  req.userId = user.id;
  req.role = user.role;
  next();
};

export const adminOnly = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      uuid: req.session.userId,
    },
  });

  if (!user) {
    return res.status(404).json({ message: "User Tidak Ditemukan" });
  }
  if (user.role !== "admin" && user.role !== "staff") 
    return res.status(403).json({ message: "Anda Tidak Memiliki Akses" });

  req.role = user.role;
  next();
};
