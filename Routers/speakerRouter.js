const express = require("express");
const router = express.Router();
const controller = require("./../Controllers/speakerController");
const validator = require("./../validator");
const authMW = require("./../MiddleWares/authMiddleWare");

router.use(authMW);

router.route("/speakers").
get(controller.getSpeakers).
post([
        validator.validateEmail,
        validator.validateSpeakerEmailExists,
        validator.validateUserName,
        validator.validatePassword,
        validator.validateCity,
        validator.validateStreet,
        validator.validateBuilding
    ]
    ,controller.createSpeaker).
put([
    validator.validateEmail,
    validator.validateSpeakerEmailExists,
    validator.validateUserName,
    validator.validatePassword,
    validator.validateCity,
    validator.validateStreet,
    validator.validateBuilding
    ]
    ,controller.updateSpeaker).
delete(controller.deleteSpeaker)

router.get("/speakers/:id",controller.getSpeakerById);

module.exports = router;