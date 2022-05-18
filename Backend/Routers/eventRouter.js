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
router.get("/events/:id/students", validator.validateID, controller.viewStudentEvents);
router.get("/events/:id/speakers", validator.validateObjectID,controller.viewSpeakerEvents);
router.put("/events/:id/students", validator.validateStudentsArray,validator.validateID, controller.assignStudentsToEvent);
router.put("/events/:id/speakers/main", validator.validateObjectID,controller.assignMainSpeakerToEvent);
router.put("/events/:id/speakers/others", validator.validateSpeakersArray,validator.validateID,controller.assignOtherSpeakersToEvent);

module.exports = router;