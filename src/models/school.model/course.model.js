const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    student:{
      type:mongoose.Types.ObjectId,
      ref:"students",
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Course = mongoose.model('course', courseSchema);

module.exports = Course;
