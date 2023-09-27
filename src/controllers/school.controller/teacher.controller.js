const { teacherService } = require("../../services/school.service");

/* Create teacher */
const createTeacher = async (req, res) => {
  try {
    const reqBody = req.body;

    const teacher = await teacherService.createTeacher(reqBody);
    if (!teacher) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Teacher create successfully!",
      data: { teacher },
    });
  } catch (error) {
    res.status(400).json({ suceess: false, message: error.message });
  }
};

/* Get teacher List */
const getTeacherList = async (req, res) => {
  try {
    const { search, ...options } = req.body;
    let filter = {};

    if (search) {
      filter.$or = [{ first_name: { $regex: search, $regex: "i" } }];
    }

    const getList = await teacherService.getTeacherList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get teacher list successfully!",
      date: getList,
    });
  } catch (error) {
    res.status(400).json({ suceess: false, message: error.message });
  }
};

/* Get teacher by Id */
const getTeacherById = async (req, res) => {
  try {
    const getDetails = await teacherService.getTeacherById(req.params.teacherId);
    if (!getDetails) {
      throw new Error("Teacher not found!");
    }

    res.status(200).json({
      success: true,
      message: "Teacher details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Teacher Update by Id */
const updateTeacherDetails = async (req, res) => {
  try {
    const teacherId = req.params.teacherId;
    const teacherList = await teacherService.getTeacherById(teacherId);
    if (!teacherList) {
      throw new Error("Teacher not found!");
    }

    await teacherService.updateTeacher(teacherId, req.body);

    res.status(200).json({
      success: true,
      message: "Teacher update successufully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete teacher */
const deleteTeacher = async (req, res) => {
  try {
    const teacherId = req.params.teacherId;
    const teacherList = await teacherService.getTeacherById(teacherId);
    if (!teacherList) {
      throw new Error("Teacher not found!");
    }

    await teacherService.deleteTeacher(teacherId);

    res.status(200).json({
      success: true,
      message: "Teacher delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createTeacher,
  getTeacherList,
  getTeacherById,
  updateTeacherDetails,
  deleteTeacher
};
