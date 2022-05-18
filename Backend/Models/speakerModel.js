const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const speakerSchema = mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    email : String,
    username : String,
    password : String,
    city : String,
    street : String,
    building : Number
});

speakerSchema.pre("save",async function(next){
    try
    {
        const hashed = await bcrypt.hash(this.password,saltRounds);
        this.password = hashed;
        next();
    }
    catch(error)
    {
        next(error);
    }
});

speakerSchema.method('transform', function() {
    var obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    delete obj._id;

    return obj;
});

module.exports = mongoose.model("speakers", speakerSchema);