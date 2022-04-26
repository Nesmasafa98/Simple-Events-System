const express = require("express");
const router = express.Router();
const controller = require("./../Controllers/authController");
const validator = require("./../validator");

router.post("/login",controller.login);

router.post("/register/speaker",[
    validator.validateEmail,
    validator.validateSpeakerEmailExists,
    validator.validateUserName,
    validator.validatePassword,
    validator.validateCity,
    validator.validateStreet,
    validator.validateBuilding
],controller.register);

router.post("/register/student",controller.register);

module.exports = router;