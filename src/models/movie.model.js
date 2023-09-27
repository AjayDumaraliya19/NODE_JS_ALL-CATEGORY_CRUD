const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    director: {
      type: String,
      trim: true,
    },
    releaseYear: {
      type: Number,
      trim: true,
    },
    rating: {
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

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;
