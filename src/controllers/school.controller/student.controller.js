const { studentService } = require("../../services/school.service");

/* Create Student */
const createStudent = async (req, res) => {
  try {
    const reqBody = req.body;

    const student = await studentService.createStudent(reqBody);
    if (!student) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Student create successfully!",
      data: student,
    });
  } catch (error) {
    res.status(400).json({ suceess: false, message: error.message });
  }
};

/* Get student List */
const getStudentList = async (req, res) => {
  try {
    const getList = await studentService.getStudentList();

    res.status(200).json({
      success: true,
      message: "Get student list successfully!",
      date: getList,
    });
  } catch (error) {
    res.status(400).json({ suceess: false, message: error.message });
  }
};

/* Get student by Id */
const getstudentDetails = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const getDetails = await studentService.getStudentById(studentId);

    if (!getDetails) {
      throw new Error("Student not found!");
    }

    res.status(200).json({
      success: true,
      message: "Student details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Stuydent Update by Id */
const updateStudentDetails = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const studentList = await studentService.getStudentById(studentId);
    if (!studentList) {
      throw new Error("Student not found!");
    }

    await studentService.updateStudentDetails(studentId, req.body);

    res.status(200).json({
      success: true,
      message: "Student update successufully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete Student */
const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const studentList = await studentService.getStudentById(studentId);
    if (!studentList) {
      throw new Error("Student not found!");
    }

    await studentService.deleteStudent(studentId);

    res.status(200).json({
      success: true,
      message: "Student delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createStudent,
  getStudentList,
  getstudentDetails,
  updateStudentDetails,
  deleteStudent,
};
