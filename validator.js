const {body,param,query,check} = require("express-validator");
const mongoose = require("mongoose");
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

module.exports.validateStudentsArray = body("students").isArray().withMessage("Invalid student data").custom((value)=>{

 

    for(let i = 0; i<value.length; i++)
    {
        if(typeof(value[i]) !== "number")
        {
            throw new Error("Invalid Student Data")
        }
    }
    return true;
        
});

module.exports.validateObjectID = body("id")||param("id")||body("mainSpeaker").custom((value)=>{
    if(mongoose.isValidObjectId(value))
    {
        return true;
    }
    throw new Error("Invalid Speaker Data");
});

module.exports.validateSpeakersArray = body("otherSpeakers").isArray().withMessage("Invalid speaker data").custom((value)=>{

 

    for(let i = 0; i<value.length; i++)
    {
        if(!mongoose.isValidObjectId(value[i]))
        {
            throw new Error("Invalid Speaker Data")
        }
    }
    return true;
        
});

