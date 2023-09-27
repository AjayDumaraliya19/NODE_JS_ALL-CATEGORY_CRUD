const mongoose = require("mongoose");

const stationarySchema = new mongoose.Schema(
  {
    customer_fullName: {
      type: String,
      trim: true,
    },
    product_list: {
      type: String,
      trim: true,
    },
    product_price: {
      type: Number,
      trim: true,
    },
    order_list: {
      type: String,
      trim: true,
    },
    shipping_list: {
      type: String,
      trim: true,
    },
    payment: {
      type: Number,
      trim: true,
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
    versionKey: false,
  }
);

const Stationary = mongoose.model("stationary", stationarySchema);
module.exports = Stationary;
