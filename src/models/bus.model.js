const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
  {
    driver_name: {
      type: String,
      trim: true,
    },
    bus_number: {
      type: String,
      trim: true,
    },
    bus_stop: {
      type: String,
      trime: true,
    },
    bus_route: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    travel: {
      type: mongoose.Types.ObjectId,
      ref: "travel",
    },
  },
  {
    timestamps: true,
    varsionKey: false,
  }
);

const Bus = mongoose.model("Bus", busSchema);
module.exports = Bus;
