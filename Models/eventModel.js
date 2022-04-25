const mongoose = require("mongoose");
const {autoIncrement} = require("mongoose-plugin-autoinc");

const eventSchema = mongoose.Schema({
    _id : Number,
    title : {type:String, required: true},
    eventDate : Date,
    mainSpeaker : {type:mongoose.Types.ObjectId, ref:"speakers"} ,
    otherSpeakers : [{type:mongoose.Types.ObjectId, ref:"speakers"}],
    students : [{type:Number, ref:"students"}]
});

eventSchema.plugin(autoIncrement,{
    model: "events",
    startAt :1
});

module.exports = mongoose.model("events",eventSchema);