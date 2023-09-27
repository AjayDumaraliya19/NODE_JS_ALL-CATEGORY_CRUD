const { Product } = require("../models");

/* Create product */
const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

/* Get product list */
const getProductList = async () => {
  return Product.find({
    $or: [{ price: { $gt: 250 } }, { stock: { $gt: 200 } }],
  }).populate(category);
};

/* Get product details by id
 * @param {ObjectId} productId
 * @returns {Promise<Product>} */
const getProductById = async (productId) => {
  return Product.findById(productId);
};

/* product details update by id
 * @param {ObjectId} productId
 * @param {object} updateBody
 * @returns {Promise<Product>} */
const updateProductDetails = async (productId, updateBody) => {
  return Product.findByIdAndUpdate(productId, { $set: updateBody });
};

/* Delete product
 * @param {ObjectId} productId
 * @returns {Promise<Product>} */
const deleteProduct = async (productId) => {
  return Product.findByIdAndDelete(productId);
};

module.exports = {
  createProduct,
  getProductList,
  getProductById,
  updateProductDetails,
  deleteProduct,
};
