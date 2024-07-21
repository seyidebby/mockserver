const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  movie: [
    {
      type: mongoose.Types.ObjectId,
      ref: "movie",
    },
  ],
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
