const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    _id : Number,
    title : {type:String, required: true},
    eventDate : Date,
    mainSpeaker : {type:mongoose.Types.ObjectId, ref:"speakers"} ,
    otherSpeakers : [{type:mongoose.Types.ObjectId, ref:"speakers"}],
    students : [{type:Number, ref:"students"}]
});

module.exports = mongoose.model("events",eventSchema);