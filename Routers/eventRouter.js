const express = require("express");
const router = express.Router();
const controller = require("./../Controllers/eventController");
const validator = require("./../validator");

router.route("/events").
get(controller.getEvents).
post([
        validator.validateID,
        validator.validateTitle,
        validator.validateDate
    ],
    controller.createEvent).
put([
    validator.validateID,
    validator.validateTitle,
    validator.validateDate
    ],
    controller.updateEvent).
delete(validator.validateID,controller.deleteEvent)

router.get("/events/:id", validator.validateID, controller.getEventById);

module.exports = router;