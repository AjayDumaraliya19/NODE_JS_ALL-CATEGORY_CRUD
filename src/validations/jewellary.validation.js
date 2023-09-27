const Joi = require("joi");

/* Create jewellary */
const createJewellary = {
  body: Joi.object().keys({
    jewellary_name: Joi.string().required().trim(),
    jewellary_type: Joi.string().required().trim(),
    material: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
    stock: Joi.number().integer().required(),
  }),
};

/* Get jewellary list */
const getJewellaryList = {
  query: Joi.object().keys(),
};

/* Get jewellary details by id */
const getJewellaryById = {
  params: Joi.object().keys(),
};

/* Jewellary details update by Id */
const updateJewellary = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    jewellary_name: Joi.string().required().trim(),
    jewellary_type: Joi.string().required().trim(),
    material: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
    stock: Joi.number().integer().required(),
  }),
};

module.exports = {
    createJewellary,
    getJewellaryList,
    getJewellaryById,
    updateJewellary
};
