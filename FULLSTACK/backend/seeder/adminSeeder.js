import bcrypt from "bcrypt";
import user from "../models/userModel.js";

(async () => {
  try {
    await user.bulkCreate([
      {
        name: "Nathan Raphael",
        email: "2272039@maranatha.ac.id",
        password: bcrypt.hashSync("snaggle", 10),
      },
    ]);
    console.log("Berhasil melakukan seed");
  } catch (error) {
    console.error("Gagal melakukan seed", error);
  }
})();
