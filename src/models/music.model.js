const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    artist: {
      type: String,
      trim: true,
    },
    album: {
      type: String,
      trim: true,
    },
    releaseYear: {
      type: Number,
      trim: true,
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

const Music = mongoose.model("music", musicSchema);

module.exports = Music;
