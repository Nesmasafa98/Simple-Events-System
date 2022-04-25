const mongoose = require("mongoose");
const {autoIncrement} = require("mongoose-plugin-autoinc");

const studentSchema = mongoose.Schema({
    _id : Number,
    email : String,
    username : String,
    password : String
});

studentSchema.plugin(autoIncrement,{
    model: "students",
    startAt :1
});

module.exports = mongoose.model("students", studentSchema);