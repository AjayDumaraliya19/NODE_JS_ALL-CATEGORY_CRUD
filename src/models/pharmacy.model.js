const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema(
  {
    patients_name: {
      type: String,
      trim: true,
    },
    medicines_name: {
      type: String,
      trim: true,
    },
    manufacture_date: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Pharmacy = mongoose.model("pharmacy", pharmacySchema);
module.exports = Pharmacy;
