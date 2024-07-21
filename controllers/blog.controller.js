const mongoose = require("mongoose");
const blog = require("../models/blog.js");
const { decodeToken } = require("../utils/index.js");
async function createNew(req, res) {
  const decodedtoken = decodeToken(req.headers.authorization.split(" ")[1]);
  if (!decodedtoken) {
    res.status(400).json({ message: "invalid or expired token " });
  }
  const { title, description } = req.body;
  const newblog = {
    title: title,
    author: decodedtoken._id,
    description: description,
  };
  const newBlog = new blog(newblog);
  await newBlog.save();
  res
    .status(201)
    .json({ message: "blog posted succesfully", newBlog: newblog });
}

async function editblog(req, res) {
  const edit = await blog.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
  });
  res.status(200).json({ message: "edited blog successfully ", editted: edit });
}

module.exports = { createNew, editblog };
