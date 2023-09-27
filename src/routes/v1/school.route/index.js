const express = require("express");
const studentRoutes = require("./Student.route");
const teacherRoutes = require("./teacher.route");
const courseRoutes = require("./course.route");

const router = express.Router();

router.use("/student", studentRoutes);
router.use("/teacher", teacherRoutes);
router.use("/course", courseRoutes);

module.exports = router;