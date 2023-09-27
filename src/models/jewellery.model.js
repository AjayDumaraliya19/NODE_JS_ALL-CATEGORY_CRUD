const mongoose = require("mongoose");

const jewellarySchema = new mongoose.Schema(
  {
    jewellary_name: {
      type: String,
      trim: true,
    },
    jewellary_type: {
      type: String,
      trim: true,
    },
    material: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
    },
    stock: {
      type: Number,
      trim: true,
      default: 0,
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

const Jewellary = mongoose.model("jewellary", jewellarySchema);

module.exports = Jewellary;
