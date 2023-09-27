const Joi = require("joi");

/* Create travel */
const createTravel = {
  body: Joi.object().keys({
    user_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    destination: Joi.string().required().trim(),
    destination_dis: Joi.string().required().trim(),
    review: Joi.number().integer().required(),
  }),
};

/* Get travel list */
const getTravelList = {
  query: Joi.object().keys(),
};

/* Get travel details by id */
const getTravelbyId = {
  params: Joi.object().keys(),
};

/* Travel details update by id */
const updateTravel = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    user_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    destination: Joi.string().required().trim(),
    destination_dis: Joi.string().required().trim(),
    review: Joi.number().integer().required(),
  }),
};

module.exports = {
  createTravel,
  getTravelList,
  getTravelbyId,
  updateTravel
};
