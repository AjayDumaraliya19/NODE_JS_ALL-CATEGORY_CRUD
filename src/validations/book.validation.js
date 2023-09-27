const Joi = require('joi');

/* Create book */
const createBook = {
    body: Joi.object().keys({
        book_name: Joi.string().required().trim(),
        book_dis: Joi.string().required().trim(),
        book_price: Joi.number().integer().required(),
        book_stock: Joi.number().integer().required()
    }),
};

/* Get book list */
const getBookList = {
    query: Joi.object().keys(),
};

/* Get book details by id */
const getDetails = {
    params: Joi.object().keys(),
};

/* Book details update by Id */
const updateBookDetails = {
    params: Joi.object().keys(),
    body: Joi.object().keys({
        book_name: Joi.string().required().trim(),
        book_dis: Joi.string().required().trim(),
        book_price: Joi.number().integer().required(),
        book_stock: Joi.number().integer().required()
    }),
}

module.exports = {
    createBook,
    getBookList,
    getDetails,
    updateBookDetails
}

