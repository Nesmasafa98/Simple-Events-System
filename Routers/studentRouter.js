const express = require("express");
const router = express.Router();
const controller = require("./../Controllers/studentController");
const validator = require("./../validator");
const authMW = require("./../MiddleWares/authMiddleWare");

router.use(authMW);

router.route("/students").
get(controller.getStudents).
post([
        validator.validateEmail,
        validator.validateStudentEmailExists,
        validator.validateUserName,
        validator.validatePassword
    ],
    controller.createStudent).
put([
    validator.validateEmail,
    validator.validateStudentEmailExists,
    validator.validateUserName,
    validator.validatePassword
    ],
    controller.updateStudent).
delete(validator.validateID, controller.deleteStudent)

router.get("/students/:id", validator.validateID, controller.getStudentById);


module.exports = router;