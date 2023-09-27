const Joi = require("joi");

/* Create bus */
const createBus = {
  body: Joi.object().keys({
    driver_name: Joi.string().required().trim(),
    bus_number: Joi.string().required().trim(),
    bus_stop: Joi.string().required().trim(),
    bus_route: Joi.string().required().trim(),
  }),
};

/* Get bus list */
const getBusList = {
  query: Joi.object().keys(),
};

/* Get bus details by id */
const getBusDetails = {
  params: Joi.object().keys(),
};

/* bus details update by id */
const updateBusDetails = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    driver_name: Joi.string().required().trim(),
    bus_number: Joi.string().required().trim(),
    bus_stop: Joi.string().required().trim(),
    bus_route: Joi.string().required().trim(),
  }),
};

module.exports = {
  createBus,
  getBusList,
  getBusDetails,
  updateBusDetails,
};
