const Joi = require("joi");

/* Create user */
const createUser = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    mobile_no: Joi.number().integer().required(),
    adress: Joi.string().required().trim(),
  }),
};

/* Get user list */
const getUserList = {
  query: Joi.object().keys(),
};

/* Get user details by id */
const getDetails = {
  params: Joi.object().keys(),
};

/* user details update by id */
const updateDetails = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    mobile_no: Joi.number().integer().required(),
    adress: Joi.string().required().trim(),
  }),
};

/** Send Email */
const sendMail = {
  body: Joi.object({
    email: Joi.string().required().trim().email(),
    subject: Joi.string().required().trim(),
    text: Joi.string().required().trim(),
  }),
};

module.exports = {
  createUser,
  getUserList,
  getDetails,
  updateDetails,
  sendMail,
};
