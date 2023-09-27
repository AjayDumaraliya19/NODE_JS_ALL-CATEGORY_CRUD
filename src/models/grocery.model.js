const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      trime: true,
    },
    is_Purchased: {
      type: Boolean,
      default: false,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "product",
    },
  },
  {
    timestamps: true,
    varsionKey: false,
  }
);

const Grocery = mongoose.model("glocery", grocerySchema);
module.exports = Grocery;
