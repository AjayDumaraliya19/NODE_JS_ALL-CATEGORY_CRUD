const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
    },
    product_dis: {
      type: String,
      trim: true,
    },
    quality: {
      type: String,
      trim: true,
    },
    stock: {
      type: Number,
      trim: true,
    },
    is_active: {
      type: Boolean,
      trim: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;
