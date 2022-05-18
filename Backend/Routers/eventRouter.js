const express = require("express");
const router = express.Router();
const controller = require("./../Controllers/eventController");
const validator = require("./../validator");
const authMW = require("./../MiddleWares/authMiddleWare");

router.use(authMW);

router.route("/events").
get(controller.getEvents).
post([
        validator.validateTitle,
        validator.validateDate
    ],
    controller.createEvent).
put([
    validator.validateTitle,
    validator.validateDate
    ],
    controller.updateEvent)

router.get("/events/:id", validator.validateID, controller.getEventById);
router.delete("/events/:id",validator.validateID, controller.deleteEvent);
router.put("/events/:id",[
    validator.validateTitle,
    validator.validateDate
    ],
    controller.updateEvent);
router.get("/events/students/:id", validator.validateID, controller.viewStudentEvents);
router.get("/events/speakers/:id", validator.validateObjectID,controller.viewSpeakerEvents);
router.put("/events/students", validator.validateStudentsArray,validator.validateID, controller.assignStudentsToEvent);
router.put("/events/speakers/main", validator.validateObjectID,controller.assignMainSpeakerToEvent);
router.put("/events/speakers/others", validator.validateSpeakersArray,validator.validateID,controller.assignOtherSpeakersToEvent);

module.exports = router;