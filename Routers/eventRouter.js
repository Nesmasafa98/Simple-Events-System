const express = require("express");
const router = express.Router();
const controller = require("./../Controllers/eventController");
const validator = require("./../validator");

router.route("/events").
get(controller.getEvents).
post([
        validator.validateTitle,
        validator.validateDate
    ],
    controller.createEvent).
put(controller.updateEvent).
delete(controller.deleteEvent)

router.get("/events/:id", controller.getEventById);

module.exports = router;