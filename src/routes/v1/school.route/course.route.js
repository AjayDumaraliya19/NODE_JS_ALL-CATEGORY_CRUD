const express = require("express");
const { courseValidation } = require("../../../validations/school.validation");
const { courseController } = require("../../../controllers/school.controller");
const validate = require("../../../middlewares/validate");
const { courseService } = require("../../../services/school.service");

const router = express.Router();

/* Create course */
router.post(
  "/create-course",
  validate(courseValidation.createCourse),
  courseController.createCourse
);

/* Get course list */
router.get(
  "/get-course-list",
  validate(courseValidation.getCourseList),
  courseController.getCourseList
);

/* Get course by Id */
router.get(
  "/get-course-details/:courseId",
  validate(courseValidation.getCourseById),
  courseController.getCourseDetails
);

/* Update student by id */
router.put(
  "/update-course-details/:courseId",
  validate(courseService.updateCourse),
  courseController.updateCourseDetails
);

/* Delete course */
router.delete(
  "/delete-course/:courseId",
  validate(courseValidation.getCourseById),
  courseController.deleteCourse
);

module.exports = router;