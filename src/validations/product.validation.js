const Joi = require("joi");

/* Create product */
const createProduct = {
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
    product_dis: Joi.string().required().trim(),
    quality: Joi.string().required().trim(),
    stock: Joi.number().integer().required(),
    category: Joi.string().required(),
  }),
};

/* GET product list */
const getProductList = {
  query: Joi.object().keys(),
};

/* GET product details by id */
const getproductDetails = {
  params: Joi.object().keys(),
};

/* Product details update by id */
const updateProduct = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
    product_dis: Joi.string().required().trim(),
    quality: Joi.string().required().trim(),
    stock: Joi.number().integer().required(),
    category: Joi.string().required(),
  }),
};

module.exports = {
  createProduct,
  getProductList,
  getproductDetails,
  updateProduct
};
