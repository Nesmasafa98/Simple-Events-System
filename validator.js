const {body,params,query} = require("express-validator");

module.exports.validateEmail = body("email").matches("/^[a-zA-Z]+\@{1}[a-zA-Z0-9]+(.com){1}$/").withMessage("Incorrect E-mail");

module.exports.validateUserName = body("username").isLength({min: 8}).matches("/^[a-zA-Z]+[0-9]+$/").withMessage("Username should be atleast 8 characters long and starts with a letter");

module.exports.validatePassword = body("password").isLength({min: 8}).matches("/^[a-zA-Z0-9\@\_\.\-]+/").withMessage("Passwords must have at least 8 characters and contain the following: uppercase letters, lowercase letters, numbers, and special characters like (@ or . or _ or -) only.");

module.exports.validateCity = body("city").isAlpha().withMessage("invalid City");

module.exports.validateStreet = body("street").isAlpha().withMessage("Invalid street");

module.exports.validateBuilding = body("buildingNo").isNumeric().withMessage("Invalid building number");

module.exports.validateTitle = body("title").isAlphanumeric().withMessage("Title must contain alphanumeric characters");

module.exports.validateDate = body("date").isDate().withMessage("Invalid date");