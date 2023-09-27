const express = require("express");
const { teacherValidation } = require("../../../validations/school.validation");
const { teacherController } = require("../../../controllers/school.controller");
const validate = require("../../../middlewares/validate");
const { teacherService } = require("../../../services/school.service");

const router = express.Router();

/* Create teacher */
router.post(
  "/create-teacher",
  validate(teacherValidation.createTeacher),
  teacherController.createTeacher
);

/* Get teacher list */
router.get(
  "/get-teacher-list",
  validate(teacherService.getTeacherList),
  teacherController.getTeacherList
);

/* Get teacher by Id */
router.get(
  "/get-teacher-details/:teacherId",
  validate(teacherService.getTeacherById),
  teacherController.getTeacherById
);

/* Update teacher by id */
router.put(
  "/update-teacher-details/:teacherId",
  validate(teacherService.updateTeacher),
  teacherController.updateTeacherDetails
);

/* Delete teacher */
router.delete(
  "/delete-teacher/:teacherId",
  validate(teacherService.getTeacherById),
  teacherController.deleteTeacher
);

module.exports = router;