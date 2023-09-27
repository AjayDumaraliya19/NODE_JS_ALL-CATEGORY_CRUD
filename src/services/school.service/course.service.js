const { School } = require("../../models");

/* Create course
 * @params {object} reqBody
 * @return {promise<Course>} */
const createCourse = async (reqBody) => {
  return School.Course.create(reqBody);
};

/* Get course list
 * @params {object} filter
 * @params {object} options
 * @return {promise<Course>} */
const getCourseList = async () => {
  return School.Course.find({ $or: [{ is_active: true }, {}] }).populate(
    student
  );
};

/* Get course by id
 * @params {object} courseId
 * @return {promise<Course>} */
const getCourseById = async (courseId) => {
  return School.Course.findById(courseId);
};

/* Student details update by id
 * @param {ObjectId} studentsId
 * @param {object} updateBody
 * @returns {Promise<Student>} */
const updateCourse = async (courseId, updateBody) => {
  return School.Course.findByIdAndUpdate(courseId, { $set: updateBody });
};

/* Delete Course
 * @param {ObjectId} courseId
 * @returns {Promise<Course>} */
const deleteCourse = async (courseId) => {
  return School.Course.findByIdAndUpdate(courseId);
};

module.exports = {
  createCourse,
  getCourseList,
  getCourseById,
  updateCourse,
  deleteCourse,
};
