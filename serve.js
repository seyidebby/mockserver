const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const register = require("./controllers/register.controller");
const login = require("./controllers/login.controllers");
const blog = require("./models/blog");
const { createNew, editblog } = require("./controllers/blog.controller.js");
const {
  validateRegister,
  validatelogin,
  validateblog,
  validateblogedit,
} = require("./middlewares/validators/auth.validator.js");

const server = express();
server.use(express.json());
dotenv.config();
const port = process.env.PORT;
server.get("/api/movies", function () {
  return resizeBy.status(200).json({
    data: [
      {
        actor: "junaid",
        name: "clown town",
      },
      {
        actor: "seyi shey",
        name: "seyi director",
      },
    ],
  });
});
server.post("/blog", validateblog, createNew);
server.patch("/blog", validateblogedit, editblog);

server.post("/api/register", validateRegister, register);

server.post("/api/login", validatelogin, login);

server.listen(port, () => {
  console.log("server started on port");
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("database connection established");
    })
    .catch(() => {
      throw new Error(err.message);
    });
});
