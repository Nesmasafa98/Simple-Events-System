const express = require("express");
const router = express.Router();
const controller = require("./../Controllers/studentController");
const validator = require("./../validator");

router.route("/students").
get(controller.getStudents).
post([
        validator.validateEmail,
        validator.validateUserName,
        validator.validatePassword
    ],
    controller.createStudent).
put(controller.updateStudent).
delete(controller.deleteStudent)

router.get("/students/:id",controller.getStudentById);


module.exports = router;