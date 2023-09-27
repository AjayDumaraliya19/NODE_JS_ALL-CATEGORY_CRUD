const Joi = require("joi");

/* Create teacher */
const createTeacher = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    gender: Joi.string().required().trim(),
    subject: Joi.string().required().trim(),
    contact: Joi.number().integer().required(),
  }),
};

/* Get teacher list */
const getTeacherList = {
  query: Joi.object().keys(),
};

/* Get teacher by id */
const getTeacherById = {
  params: Joi.object().keys(),
};

/* Teacher Update by id*/
const updateTeacher = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    gender: Joi.string().required().trim(),
    subject: Joi.string().required().trim(),
    contact: Joi.number().integer().required(),
  }),
};

module.exports = {
    createTeacher,
    getTeacherList,
    getTeacherById,
    updateTeacher
}