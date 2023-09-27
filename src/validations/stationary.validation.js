const Joi = require("joi");

/* Create Stationary */
const createStationary = {
    body: Joi.object().keys({
        customer_fullName: Joi.string().required().trim(),
        product_list: Joi.string().required().trim(),
        product_price: Joi.number().integer().required(),
        order_list: Joi.string().required().trim(),
        shipping_list: Joi.string().required().trim(),
        payment: Joi.number().integer().required(),
    }),
};

/* Get stationary list */
const getStationaryList = {
    query: Joi.object().keys(),
};

/* get Stationary details by id */
const getStationaryDetails = {
    params: Joi.object().keys(),
};

/* Stationary details update by id */
const updateStationaryDetails = {
    params: Joi.object().keys(),
    body: Joi.object().keys({
        customer_fullName: Joi.string().required().trim(),
        product_list: Joi.string().required().trim(),
        product_price: Joi.number().integer().required(),
        order_list: Joi.string().required().trim(),
        shipping_list: Joi.string().required().trim(),
        payment: Joi.number().integer().required(),
    }),
};



module.exports = {
    createStationary,
    getStationaryList,
    getStationaryDetails,
    updateStationaryDetails
}