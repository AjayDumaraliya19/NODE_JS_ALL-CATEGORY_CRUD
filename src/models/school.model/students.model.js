const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    age: {
      type: Number,
      trim: true,
      default: 0,
    },
    gander: {
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
    teacher:{
      type: mongoose.Types.ObjectId,
      ref:"teacher",
    }
  },
  {
    timestamps:true,
    versionKey:false,
  }
);

const Student = mongoose.model("student", studentSchema);

module.export = Student;
