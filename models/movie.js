const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  name: String,
  actor: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const movie = mongoose.model("movie", movieSchema);
module.exports = movie;
