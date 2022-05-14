const express = require("express");
const router = express.Router();
const controller = require("./../Controllers/studentController");
const validator = require("./../validator");
const authMW = require("./../MiddleWares/authMiddleWare");
const bcryptPassword = require("../bcryptPassword");

router.use(authMW);

router.route("/students").
get(controller.getStudents).
put([
    validator.validateEmail,
    validator.validateStudentEmailExists,
    validator.validateUserName,
    validator.validatePassword
    ],
    bcryptPassword.hashPassword
    ,
    controller.updateStudent).
delete(validator.validateID, controller.deleteStudent)

router.get("/students/:id", validator.validateID, controller.getStudentById);

router.put("/students/profile", validator.validateEmail, validator.validateStudentEmailExists, controller.editStudentPartial);


module.exports = router;