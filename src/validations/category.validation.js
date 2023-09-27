const Joi = require("joi");

/* Create Category */
const createCategory = {
  body: Joi.object().keys({
    category_name: Joi.string().required().trim(),
    category_dis: Joi.string().required().trim(),
  }),
};

/* GET Category list */
const getCategoryList = {
  query: Joi.object().keys(),
};

/* Get category details by id */
const getCategoryDetails = {
  params: Joi.object().keys(),
};

/* bus details update by id */
const updateCategoryDetails = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    category_name: Joi.string().required().trim(),
    category_dis: Joi.string().required().trim(),
  }),
};

module.exports = {
  createCategory,
  getCategoryList,
  getCategoryDetails,
  updateCategoryDetails,
};
