const Joi = require('joi');

/* Create hotel */
const createHotel = {
    body: Joi.object().keys({
        rooms: Joi.number().integer().required(),
        guests_name: Joi.string().required().trim(),
        reservations: Joi.boolean().required(),
        staff: Joi.number().integer().required(),
        invoices: Joi.number().integer().required()
    }),
};

/* Get hotel list */
const getHotelList = {
    query: Joi.object().keys(),
};

/* Get hotel details by id */
const getHotelDetails = {
    params: Joi.object().keys(),
};

/* Hotel details update by Id */
const updateHotelDetails = {
    params: Joi.object().keys(),
    body: Joi.object().keys({
        rooms: Joi.number().integer().required(),
        guests_name: Joi.string().required().trim(),
        reservations: Joi.boolean().required(),
        staff: Joi.number().integer().required(),
        invoices: Joi.number().integer().required()
    }),
}

module.exports = {
    createHotel,
    getHotelList,
    getHotelDetails,
    updateHotelDetails
}

