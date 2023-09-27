const Joi = require("joi");

/* Create student */
const createStudent = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    age: Joi.number().integer().required(),
    gander: Joi.string().required().trim(),
    contact: Joi.number().integer().required(),
  }),
};

/* Get Students list */
const getStudentList = {
  query: Joi.object().keys(),
};

/* Get Students by id */
const getStudentById = {
  params: Joi.object().keys(),
};

/* student details update by id */
const updateStudent = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    age: Joi.number().integer().required(),
    gander: Joi.string().required().trim(),
    contact: Joi.number().integer().required(),
  }),
};

module.exports = {
    createStudent,
    getStudentList,
    getStudentById,
    updateStudent
}