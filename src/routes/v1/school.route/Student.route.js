const express = require("express");
const { studentValidation } = require("../../../validations/school.validation");
const { studentController } = require("../../../controllers/school.controller");
const validate = require("../../../middlewares/validate");

const router = express.Router();

/* Create Student */
router.post(
  "/create-student",
  validate(studentValidation.createStudent),
  studentController.createStudent
);

/* Get student list */
router.get(
  "/get-student-list",
  validate(studentValidation.getStudentList),
  studentController.getStudentList
);

/* Get student by Id */
router.get(
  "/get-student-details/:studentId",
  validate(studentValidation.getStudentById),
  studentController.getstudentDetails
);

/* Update student by id */
router.put(
  "/update-student-details/:studentId",
  validate(studentValidation.updateStudent),
  studentController.updateStudentDetails
);

/* Delete student */
router.delete(
  "/delete-student/:studentId",
  validate(studentValidation.getStudentById),
  studentController.deleteStudent
);

module.exports = router;