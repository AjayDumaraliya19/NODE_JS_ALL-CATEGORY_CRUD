const { Category } = require("../models");

/* Create category
 * @param {object} reqBody
 * @returns {Promise<Category>} */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

/* Get category list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Category>} */
const getCategoryList = async () => {
  return Category.find({
    $or: [{ is_active: false }, { category_name: "Books" }],
  });
};

/* Get category details by id
 * @param {ObjectId} busId
 * @returns {Promise<Category>} */
const getCategoryById = async (categoryId) => {
  return Category.findById(categoryId);
};

/* category details update by id
 * @param {ObjectId} categoryId
 * @param {object} updateBody
 * @returns {Promise<Category>} */
const updateCategoryDetails = async (categoryId, updateBody) => {
  return Category.findByIdAndUpdate(categoryId, { $set: updateBody });
};

/* Delete category
 * @param {ObjectId} categoryId
 * @returns {Promise<Category>} */
const deleteCategory = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
};

module.exports = {
  createCategory,
  getCategoryList,
  getCategoryById,
  updateCategoryDetails,
  deleteCategory,
};
