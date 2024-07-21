const mongoose = require("mongoose");
const User = require("../models/user.js");
const movie = require("../models/movie.js");
const bcrypt = require("bcryptjs");

async function register(req, res) {
  const existinguser = await User.findOne({ email: req.body.email });
  if (existinguser) {
    return res
      .status(400)
      .json({ message: "user already exist. login instead" });
  }
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(req.body.password, salt);
  req.body.password = passwordHash;
  const user = await User.create(req.body);
  await user.save();
  return res.status(200).json({
    message: "user created",
    user: user,
  });
}

module.exports = register;
