const mongoose = require("mongoose");
const {autoIncrement} = require("mongoose-plugin-autoinc");
const bcrypt = require('bcrypt');
const saltRounds = 10;


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

studentSchema.pre("save",async function(next){
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
})

// studentSchema.post("updateOne",async function(next){
//     console.log(this.password);
//     try
//     {
//         const hashed = await bcrypt.hash(this.password,saltRounds);
//         this.password = hashed;
//         next();
//     }
//     catch(error)
//     {
//         next(error);
//     }
// })

module.exports = mongoose.model("students", studentSchema);