const express = require("express");
const router = express.Router();
const controller = require("./../Controllers/speakerController");
const validator = require("./../validator");

router.route("/speakers").
get(controller.getSpeakers).
post([
        validator.validateEmail,
        validator.validateUserName,
        validator.validatePassword,
        validator.validateCity,
        validator.validateStreet,
        validator.validateBuilding
    ]
    ,controller.createSpeaker).
put(controller.updateSpeaker).
delete(controller.deleteSpeaker)

router.get("/speakers/:id",controller.getSpeakerById);

module.exports = router;