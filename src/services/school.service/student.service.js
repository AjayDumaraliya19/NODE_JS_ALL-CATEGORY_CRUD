const { School } = require("../../models");

/* Create Students
 * @params {object} reqBody
 * @return {promise<Student>} */
const createStudent = async (reqBody) => {
  return School.Student.create(reqBody);
};

/* Get studen list
 * @params {object} filter
 * @params {object} options
 * @return {promise<Student>} */
const getStudentList = async () => {
  return School.Student.find({
    $or: [{ is_active: true }, { age: { $gt: 18 } }],
  }).populate(teacher);
};

/* Get student by id
 * @params {object} studentId
 * @return {promise<Student>} */
const getStudentById = async (studentId) => {
  return School.Student.findById(studentId);
};

/* Student details update by id
 * @param {ObjectId} studentsId
 * @param {object} updateBody
 * @returns {Promise<Student>} */
const updateStudentDetails = async (studentId, updateBody) => {
  return School.Student.findByIdAndUpdate(studentId, { $set: updateBody });
};

/* Delete Student
 * @param {ObjectId} studentId
 * @returns {Promise<Student>} */
const deleteStudent = async (studentId) => {
  return School.Student.findByIdAndUpdate(studentId);
};

module.exports = {
  createStudent,
  getStudentList,
  getStudentById,
  updateStudentDetails,
  deleteStudent,
};
