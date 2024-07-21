const mongoose = require("mongoose");
const User = require("../models/user.js");
const blogSchema = mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  description: String,
});

const blog = mongoose.model("blog", blogSchema);

module.exports = blog;
