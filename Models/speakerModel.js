const mongoose = require("mongoose");

const speakerSchema = mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    email : String,
    username : String,
    password : String,
    city : String,
    street : String,
    building : Number
});

module.exports = mongoose.model("speakers", speakerSchema);