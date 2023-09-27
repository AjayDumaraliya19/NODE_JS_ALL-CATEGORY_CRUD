const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
    },
    mobile_no: {
      type: Number,
      trim: true,
    },
    adress: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestemps: true,
    versionkey: false,
  }
);

userSchema.pre("save", async function (next) {
  const salt = bcrypt.genSaltSync(8);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("users", userSchema);
module.exports = User;
