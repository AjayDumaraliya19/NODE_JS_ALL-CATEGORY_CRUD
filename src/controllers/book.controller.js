const { bookService } = require("../services");

/* Create book */
const createBook = async (req, res) => {
  try {
    const reqBody = req.body;

    const user = await bookService.createBook(reqBody);
    if (!user) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Book create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Get book list */
const getBookList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [{ book_name: { $regex: search, $regex: "i" } }];
    }

    const getList = await bookService.getBookList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get book list Successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/* Get book details by id */
const getBookDetails = async (req, res) => {
  try {
    const getDetails = await bookService.getBookById(req.params.bookId);
    if (!getDetails) {
      throw new Error("Book not Found!");
    }

    res.status(200).json({
      success: true,
      message: "Book details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, meassage: error.message });
  }
};

/* Book details update by id */
const updateBookDetails = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const bookExists = await bookService.getBookById(bookId);
    if (!bookExists) {
      throw new Error("Book not found!");
    }

    await bookService.updateBookDetails(bookId, req.body);

    res.status(200).json({
      success: true,
      message: "Book details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete book */
const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const bookExists = await bookService.getBookById(bookId);
    if (!bookExists) {
      throw new Error("Book not found!");
    }

    await bookService.deleteBook(bookId);

    res.status(200).json({
      success: true,
      message: "Book delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createBook,
  getBookList,
  getBookDetails,
  updateBookDetails,
  deleteBook,
};
