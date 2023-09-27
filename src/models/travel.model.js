const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    destination: {
      type: String,
      trim: true,
    },
    destination_dis: {
      type: String,
      trim: true,
    },
    review:{
        type: Number,
        trim: true,
        default: 3,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Travel = mongoose.model("travel", travelSchema);

module.exports = Travel;
