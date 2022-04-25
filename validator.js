const {body,param,query} = require("express-validator");
const Student = require("./Models/studentModel");
const Speaker = require("./Models/speakerModel");

module.exports.validateEmail = body("email").isEmail().withMessage("Invalid E-mail");

module.exports.validateUserName = body("username").isLength({min: 8}).withMessage("Username should be atleast 8 characters long").isAlphanumeric().withMessage("Only alphanumeric characters allowed");

module.exports.validatePassword = body("password").isLength({min: 8}).isStrongPassword().withMessage("Passwords must have at least 8 characters and contain the following: uppercase letters, lowercase letters, numbers, and special characters like (@ or . or _ or -).");

module.exports.validateCity = body("city").isAlpha().withMessage("Invalid city");

module.exports.validateStreet = body("street").isAlpha().withMessage("Invalid street");

module.exports.validateBuilding = body("buildingNo").isNumeric().withMessage("Invalid building number");

module.exports.validateTitle = body("title").isAlpha().withMessage("Title must contain alphanumeric characters");

module.exports.validateDate = body("date").isDate().withMessage("Invalid date");

module.exports.validateID = body("id")||param("id").isNumeric().withMessage("ID must be numeric");

module.exports.validateStudentEmailExists = body("email").custom((value,{req}) => {

    return Student.findOne({ email: value })
        .then((data) => {
            
            if (data !== null && req.body.oldEmail !== value) {
                
                throw new Error("Email already in use.");

            }
        })
});

module.exports.validateSpeakerEmailExists = body("email").custom((value) => {

    return Speaker.findOne({ email: value })
        .then((data) => {
            if (data !== null && req.body.oldEmail !== value) {
                throw new Error("Email already in use.");
            }
        })
});

