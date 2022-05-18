const express = require("express");
const router = express.Router();
const controller = require("./../Controllers/studentController");
const validator = require("./../validator");
const authMW = require("./../MiddleWares/authMiddleWare");
const bcryptPassword = require("../bcryptPassword");

router.use(authMW);

router.route("/students").
get(controller.getStudents)

router.get("/students/:id", validator.validateID, controller.getStudentById);
router.delete("/students/:id", validator.validateID, controller.deleteStudent);
router.put("/students/:id",[
    validator.validateEmail,
    validator.validateStudentEmailExists,
    validator.validateUserName,
    validator.validatePassword
    ],
    bcryptPassword.hashPassword
    ,
    controller.updateStudent);
router.put("/students/profile/:id", validator.validateEmail, validator.validateStudentEmailExists, controller.editStudentPartial);


module.exports = router;