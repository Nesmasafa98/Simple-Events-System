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
    controller.updateEvent).
delete(validator.validateID,controller.deleteEvent)

router.get("/events/:id", validator.validateID, controller.getEventById);
router.get("/events/students/:id", validator.validateID, controller.viewStudentEvents);
router.get("/events/speakers/:id", validator.validateID, controller.viewSpeakerEvents);

module.exports = router;