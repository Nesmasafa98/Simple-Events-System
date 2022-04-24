const {validationResult} = require("express-validator");
const mongoose = require("mongoose");
const Speaker = require("./../Models/speakerModel");

module.exports.getSpeakers = (req,res,next)=>{

    Speaker.find({})
           .then((data) => {
               res.status(200).json({ message: data });
           })
           .catch((error) => {
               next(error);
           })
   
}

module.exports.getSpeakerById = (req,res,next)=>{

    Speaker.find({_id:req.body.id})
    .then((data) => {
        res.status(200).json({ message: data });
    })
    .catch((error) => {
        next(error);
    })
    
}

module.exports.createSpeaker = (req,res,next)=>{

    //validation
    let result = validationResult(req);
    if (!result.isEmpty()) {
        let message = result.array().reduce((current, error) => current + error.msg + ", ", " ");
        let error = new Error(message);
        error.status = 422;
        throw error;

    }
    //response
    let speaker = new Speaker({

        _id : mongoose.Types.ObjectId,
        email : req.body.email,
        username : req.body.username,
        password : req.body.password,
        city : req.body.city,
        street : req.body.street,
        building : req.body.buildingNo

    });

    speaker.save()
           .then((data)=>{

                res.status(201).json({message:"Speaker Added" , data});

           })
           .catch((error)=>{

               next(error);

           })

}


module.exports.updateSpeaker = (req,res,next)=>{

    Speaker.updateOne({_id:req.body.id},{
        $set:{
            email : req.body.email,
            username : req.body.username,
            password : req.body.password,
            city : req.body.city,
            street : req.body.street,
            building : req.body.building
        }
        })
           .then((data)=>{

                if(data.matchedCount == 0)
                {
                    throw new Error("Speaker Not Found");
                }
                res.status(200).json({message:"Speaker Updated",data});

           })
           .catch((error)=>{
               next(error);
           })

    


}


module.exports.deleteSpeaker = (req,res,next)=>{
    
    Speaker.deleteOne({_id:req.body.id})
           .then((data)=>{

            if(data.matchedCount == 0)
            {
                throw new Error("Speaker Not Found");
            }
            res.status(200).json({message:"Speaker Deleted",data});

           })
           .catch((error)=>{
               next(error);
           })

}