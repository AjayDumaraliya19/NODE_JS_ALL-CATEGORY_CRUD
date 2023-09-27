const express = require('express');
const { bookValidation } = require('../../validations');
const { bookController } = require('../../controllers');
const validate = require('../../middlewares/validate');


const router = express.Router();

/* Create book */
router.post(
    "/create-book",
    validate(bookValidation.createBook),
    bookController.createBook
);

/* Get book list */
router.get(
    "/book_list",
    validate(bookValidation.getBookList),
    bookController.getBookList
);

/* Get book details by ID */
router.get(
    "/get-details/:bookId",
    validate(bookValidation.getDetails),
    bookController.getBookDetails
);

/* book details update by id */
router.put(
    "/update-book-details/:bookId",
    validate(bookValidation.updateBookDetails),
    bookController.updateBookDetails
)

/* Delete book */
router.delete(
    "/delete-book/:bookId",
    validate(bookValidation.getDetails),
    bookController.deleteBook
);

module.exports = router;