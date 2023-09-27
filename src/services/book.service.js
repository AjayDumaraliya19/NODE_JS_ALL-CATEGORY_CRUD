const { Book } = require("../models");

/* Create book
 * @param {object} reqBody
 * @returns {Promise<book>}  */
const createBook = async (reqBody) => {
  return Book.create(reqBody);
};

/* Get book list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Book>}*/
const getBookList = async () => {
  return Book.find({ $or: [{ is_active: true }, { book_name: "mahabharata" }] });
};

/* Get bus details by id
 * @param {ObjectId} busId
 * @returns {Promise<Bus>} */
const getBookById = async (bookId) => {
  return Book.findById(bookId);
};

/* book details update by id
 * @param {ObjectId} bookId
 * @param {object} updateBody
 * @returns {Promise<Book>} */
const updateBookDetails = async (bookId, updateBody) => {
  return Book.findByIdAndUpdate(bookId, { $set: updateBody });
};

/* Delete book
 * @param {ObjectId} bookId
 * @returns {Promise<Book>} */
const deleteBook = async (bookId) => {
  return Book.findByIdAndDelete(bookId);
};

module.exports = {
  createBook,
  getBookList,
  getBookById,
  updateBookDetails,
  deleteBook,
};
