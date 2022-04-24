const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    _id : Number,
    email : String,
    username : String,
    password : String
});

module.exports = mongoose.model("students", studentSchema);