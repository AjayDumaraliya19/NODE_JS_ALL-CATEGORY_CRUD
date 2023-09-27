const Joi = require("joi");

/* Create grocery */
const createGrocery = {
  body: Joi.object().keys({
    name: Joi.string().required().trim(),
    category: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
    is_Purchased: Joi.boolean().required(),
  }),
};

/* Get grocery list */
const getGroceryList = {
  query: Joi.object().keys(),
};

/* Get grocery details by id */
const getGroceryById = {
  params: Joi.object().keys(),
};

/* grocery details update by Id */
const updateGrocery = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    name: Joi.string().required().trim(),
    category: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
    is_Purchased: Joi.boolean().required(),
  }),
};

module.exports = {
  createGrocery,
  getGroceryList,
  getGroceryById,
  updateGrocery,
};
