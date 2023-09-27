const Joi = require("joi");

/* Create Course */
const createCourse = {
  body: Joi.object().keys({
    title: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
  }),
};

/* Get Course list */
const getCourseList = {
  query: Joi.object().keys(),
};

/* Get Course by id */
const getCourseById = {
  params: Joi.object().keys(),
};

/* Course details update by id */
const updateCourse = {
  params: Joi.object().keys(),
  body: Joi.object().keys({
    title: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
  }),
};

module.exports = {
    createCourse,
    getCourseList,
    getCourseById,
    updateCourse
}