const mongoose = require("mongoose");
const User = require("../models/user.js");
const movie = require("../models/movie.js");
const bcrypt = require("bcryptjs");
const { generateToken, decodeToken } = require("../utils/index");

async function login(req, res) {
  const { email, password } = req.body;
  // check existing user
  const alreadyAUser = await User.findOne({
    email: req.body.email,
  });
  if (!alreadyAUser) {
    return res.status(400).json({ message: "user does not exist" });
  }
  // compare password
  const comparePassword = bcrypt.compareSync(
    req.body.password,
    alreadyAUser.password
  );

  if (comparePassword) {
    const token = generateToken({
      _id: alreadyAUser._id,
      email: alreadyAUser.email,
      firstname: alreadyAUser.firstName,
      lastname: alreadyAUser.lastName,
      role: alreadyAUser.role,
    });
    return res.status(200).json({
      message: "login successful",
      user: token,
    });
  }
  return res.status(400).json({ message: "credentials incorrect" });
}

module.exports = login;
