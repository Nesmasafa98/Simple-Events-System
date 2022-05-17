const jwt = require("jsonwebtoken");
const Student = require("./../Models/studentModel");
const Speaker = require("./../Models/speakerModel");
const {validationResult} = require("express-validator");
const mongoose = require("mongoose");



module.exports.login = (req,res,next)=>{

    let token;
    console.log(req.body)
    if(req.body.email == "admin@admin.com" && req.body.password == "admin") //admin
    {
        token = jwt.sign({
            email : req.body.email,
            role : "admin"
        },"ILoveChocolateCake");
        res.status(200).json({message: "login", token, role:"Admin"});
    }
    else // student 
    {
        Student.findOne({email:req.body.email,password:req.body.password})
               .then((data)=>{
                    if(data !== null)
                    {
                        token = jwt.sign({
                            id : data.id,
                            email : data.email,
                            role : "student"
                        },"ILoveChocolateCake");
                        res.status(200).json({message: "login", token, role:"Student"});
                        
                    }
                    else
                    {
                        Speaker.findOne({email:req.body.email,password:req.body.password})
                                .then((data)=>{
                                    if (data == null) {
                                        throw new Error("Username or password is incorrect");
                                    }

                                    token = jwt.sign({
                                        id: data.id,
                                        email: data.email,
                                        role: "speaker"
                                    }, "ILoveChocolateCake");
                                    res.status(200).json({ message: "login", token , role:"Speaker"});

                                })
                                .catch((error) => {
                                    next(error);
                                })

                    }
               })
               .catch((error)=>{
                   next(error);
               })
    }


}

module.exports.register = (req,res,next)=>{
    if(req.body.role === "Student")
    {
        //validation
    let result = validationResult(req);
    if (!result.isEmpty()) {
        let message = result.array().reduce((current, error) => current + error.msg + " ", " ");
        let error = new Error(message);
        error.status = 422;
        throw error;
    }
    //response
    const student = new Student({
        _id : req.body.id,
        username : req.body.username,
        email : req.body.email,
        password : req.body.password
    });
    student.save()
           .then((data)=>{

               token = jwt.sign({
                   id: data.id,
                   email: data.email,
                   role: "student"
               }, "ILoveChocolateCake");
               res.status(200).json({ message: "login", token , role:"Student"})

           })
           .catch((error)=>{
               next(error);
           })

    }
    else if(req.body.role === "Speaker")
    {
        //validation
    let result = validationResult(req);
    if (!result.isEmpty()) {
        let message = result.array().reduce((current, error) => current + error.msg + ", ", " ");
        let error = new Error(message);
        error.status = 422;
        throw error;

    }
    //response
    const plaintextPassword = req.body.password;
    let hashedPassword;
    bcrypt.hash(plaintextPassword, saltRounds, function(err, hash) {
        hashedPassword = hash;
    });
    let speaker = new Speaker({

        _id : mongoose.Types.ObjectId,
        email : req.body.email,
        username : req.body.username,
        password : hashedPassword,
        city : req.body.city,
        street : req.body.street,
        building : req.body.buildingNo

    });

    speaker.save()
           .then((data)=>{

               token = jwt.sign({
                   id: data.id,
                   email: data.email,
                   role: "speaker"
               }, "ILoveChocolateCake");
               res.status(200).json({ message: "login", token, role:"Speaker" })

           })
           .catch((error)=>{

               next(error);

           })
    }
}