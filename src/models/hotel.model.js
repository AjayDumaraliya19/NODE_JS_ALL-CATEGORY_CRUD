const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    rooms: {
      type: Number,
      trim: true,
    },
    guests_name: {
      type: String,
      trim: true,
    },
    reservations: {
      type: Boolean,
      trim: true,
    },
    staff: {
      type: Number,
      trim: true,
    },
    invoices: {
      type: Number,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true, varsionkey: false }
);

const Hotel = mongoose.model("hotel", hotelSchema);

module.exports = Hotel;
