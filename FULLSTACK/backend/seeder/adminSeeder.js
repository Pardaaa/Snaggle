import argon2 from "argon2";
import user from "../models/userModel.js";

(async () => {
  try {
    await user.bulkCreate([
      {
        name: "Nathan Raphael",
        email: "2272039@maranatha.ac.id",
        role: "admin",
        password: argon2.hash("snaggle"),
      },
    ]);
    console.log("Berhasil melakukan seed");
  } catch (error) {
    console.error("Gagal melakukan seed", error);
  }
})();
