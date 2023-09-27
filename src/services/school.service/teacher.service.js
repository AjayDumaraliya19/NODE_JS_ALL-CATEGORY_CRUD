const { School } = require("../../models");

/* Create Teacher
 * @params {object} reqBody
 * @return {promise<Teacher>} */
const createTeacher = async (reqBody) => {
  return School.Teacher.create(reqBody);
};

/* Get teacher list
 * @params {object} filter
 * @params {object} options
 * @return {promise<Teacher>} */
const getTeacherList = async () => {
  return School.Teacher.find({
    $or: [{ is_active: true }, { subject: maths }],
  });
};

/* Get teacher by id
 * @params {object} teacherId
 * @return {promise<Teacher>} */
const getTeacherById = async (teacherId) => {
  return School.Teacher.findById(teacherId);
};

/* Teacher details update by id
 * @param {ObjectId} teacherID
 * @param {object} updateBody
 * @returns {Promise<Teacher>} */
const updateTeacher = async (teacherId, updateBody) => {
  return School.Teacher.findByIdAndUpdate(teacherId, { $set: updateBody });
};

/* Delete teacher
 * @param {ObjectId} teacherId
 * @returns {Promise<Teacher>} */
const deleteTeacher = async (teacherId) => {
  return School.Teacher.findByIdAndUpdate(teacherId);
};

module.exports = {
  createTeacher,
  getTeacherList,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
};
