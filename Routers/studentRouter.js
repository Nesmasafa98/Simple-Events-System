const express = require("express");
const router = express.Router();
const controller = require("./../Controllers/studentController");
const validator = require("./../validator");

router.route("/students").
get(controller.getStudents).
post([
        validator.validateID,
        validator.validateEmail,
        validator.validateUserName,
        validator.validatePassword
    ],
    controller.createStudent).
put([
    validator.validateID,
    validator.validateEmail,
    validator.validateUserName,
    validator.validatePassword
    ],
    controller.updateStudent).
delete(validator.validateID, controller.deleteStudent)

router.get("/students/:id", validator.validateID, controller.getStudentById);


module.exports = router;