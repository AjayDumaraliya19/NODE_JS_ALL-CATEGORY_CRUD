const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    book_name: {
      type: String,
      trim: true,
    },
    book_dis: {
      type: String,
      trim: true,
    },
    book_price: {
      type: Number,
      trim: true,
    },
    book_stock: {
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

const Book = mongoose.model("books", bookSchema);

module.exports = Book;
