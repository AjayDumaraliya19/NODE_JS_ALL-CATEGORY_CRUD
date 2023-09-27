const { courseService } = require("../../services/school.service");

/* Create course */
const createCourse = async (req, res) => {
  try {
    const reqBody = req.body;

    const course = await courseService.createCourse(reqBody);
    if (!course) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Course create successfully!",
      data: { course },
    });
  } catch (error) {
    res.status(400).json({ suceess: false, message: error.message });
  }
};

/* Get course List */
const getCourseList = async (req, res) => {
  try {
    const getList = await courseService.getCourseList();

    res.status(200).json({
      success: true,
      message: "Get course list successfully!",
      date: getList,
    });
  } catch (error) {
    res.status(400).json({ suceess: false, message: error.message });
  }
};

/* Get course by Id */
const getCourseDetails = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const courseList = await courseService.getCourseById(courseId);
    if (!courseList) {
      throw new Error("Course not found!");
    }

    res.status(200).json({
      success: true,
      message: "Course details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Course Update by Id */
const updateCourseDetails = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const courseList = await courseService.getCourseById(courseId);
    if (!courseList) {
      throw new Error("Course not found!");
    }

    await courseService.updateCourseDetails(courseId, req.body);

    res.status(200).json({
      success: true,
      message: "Course update successufully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* Delete Course */
const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const courseList = await courseService.getCourseById(courseId);
    if (!courseList) {
      throw new Error("Course not found!");
    }

    await courseService.deleteCourse(courseId);

    res.status(200).json({
      success: true,
      message: "Course delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createCourse,
  getCourseList,
  getCourseDetails,
  updateCourseDetails,
  deleteCourse,
};
