const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    gander: {
      type: String,
      trim: true,
    },
    subject: {
      type: String,
      trim: true,
    },
    contact: {
      type: Number,
      trim: true,
      contact: 1234567890,
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

const Teacher = mongoose.model("Teacher", teacherSchema);

module.export = Teacher;
