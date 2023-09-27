const Joi = require("joi");

/* Create pharmacy */
const createPharmacy = {
  body: Joi.object().keys({
    patients_name: Joi.string().required().trim(),
    medicines_name: Joi.string().required().trim(),
    manufacture_date: Joi.string().required().trim(),
  }),
};

/* Get pharmacy list */
const getPharmacyList = {
  query: Joi.object().keys(),
};

/* Get pharmacy details by id */
const getPharmacyById = {
  params: Joi.object().keys(),
};

/* Pharmacy details update by Id */
const updatePharmacy = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    patients_name: Joi.string().required().trim(),
    medicines_name: Joi.string().required().trim(),
    manufacture_date: Joi.string().required().trim(),
  }),
};

module.exports = {
  createPharmacy,
  getPharmacyList,
  getPharmacyById,
  updatePharmacy,
};
