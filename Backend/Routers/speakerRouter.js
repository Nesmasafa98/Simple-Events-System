const express = require("express");
const router = express.Router();
const controller = require("./../Controllers/speakerController");
const validator = require("./../validator");
const authMW = require("./../MiddleWares/authMiddleWare");
const bcryptPassword = require("../bcryptPassword");


router.use(authMW);

router.route("/speakers").
get(controller.getSpeakers)

router.get("/speakers/:id",controller.getSpeakerById);
router.delete("/speakers/:id",controller.deleteSpeaker);
router.put("/speakers/:id",[
    validator.validateEmail,
    validator.validateSpeakerEmailExists,
    validator.validateUserName,
    validator.validatePassword,
    validator.validateCity,
    validator.validateStreet,
    validator.validateBuilding
    ],
    bcryptPassword.hashPassword
    ,controller.updateSpeaker);
router.put("/speakers/profile/:id",[
    validator.validateEmail,
    validator.validateSpeakerEmailExists,
    validator.validateCity,
    validator.validateStreet,
    validator.validateBuilding
    ]
    ,controller.editSpeakerPartially)

module.exports = router;