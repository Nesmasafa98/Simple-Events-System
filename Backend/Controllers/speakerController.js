const {validationResult} = require("express-validator");
const mongoose = require("mongoose");
const Speaker = require("./../Models/speakerModel");


//Helper Functions
function AssignRoleAdmin(req)
{
    //console.log(req.role);
    if(req.role !== "admin")
    {
        throw new Error("Not Authorized");
    }
}

function AssignRoleStudent(req)
{
    console.log(req.role)
    if(req.role !== "student")
    {
        throw new Error("Not Authorized");
    }
}

function AssignRoleSpeaker(req)
{
    if(req.role !== "speaker")
    {
        throw new Error("Not Authorized");
    }
}

//Main Functions
module.exports.getSpeakers = (req,res,next)=>{

    AssignRoleAdmin(req);
    let speakers = [];
    Speaker.find({})
           .then((data) => {
               for(let i = 0; i<data.length; i++)
               {
                   speakers.push(data[i].transform());
               }
               res.status(200).json(speakers);
           })
           .catch((error) => {
               next(error);
           })
   
}

module.exports.getSpeakerById = (req,res,next)=>{

    AssignRoleAdmin(req);
    //validation
    let result = validationResult(req);
    if (!result.isEmpty()) {
        let message = result.array().reduce((current, error) => current + error.msg + ", ", " ");
        let error = new Error(message);
        error.status = 422;
        throw error;

    }
    //response
    Speaker.findOne({_id:req.params.id})
    .then((data) => {
        res.status(200).json(data.transform());
    })
    .catch((error) => {
        next(error);
    })
    
}


module.exports.updateSpeaker = (req,res,next)=>{

    AssignRoleSpeaker(req);
    //validation
    let result = validationResult(req);
    if (!result.isEmpty()) {
        let message = result.array().reduce((current, error) => current + error.msg + ", ", " ");
        let error = new Error(message);
        error.status = 422;
        throw error;

    }
    //response
    Speaker.updateOne({_id:req.params.id},{
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
                res.status(200).json({message:"Speaker Updated",data, success:true});

           })
           .catch((error)=>{
               next(error);
           })

    


}


module.exports.deleteSpeaker = (req,res,next)=>{
    
    AssignRoleAdmin(req);
    //validation
    let result = validationResult(req);
    if (!result.isEmpty()) {
        let message = result.array().reduce((current, error) => current + error.msg + ", ", " ");
        let error = new Error(message);
        error.status = 422;
        throw error;

    }
    //response
    Speaker.deleteOne({_id:req.params.id})
           .then((data)=>{

            if(data.matchedCount == 0)
            {
                throw new Error("Speaker Not Found");
            }
            res.status(200).json({message:"Speaker Deleted",data, success:true});

           })
           .catch((error)=>{
               next(error);
           })

}

module.exports.editSpeakerPartially = (req,res,next)=>{

    AssignRoleSpeaker(req);
    //validation
    let result = validationResult(req);
    if (!result.isEmpty()) {
        let message = result.array().reduce((current, error) => current + error.msg + ", ", " ");
        let error = new Error(message);
        error.status = 422;
        throw error;

    }
    //response
    Speaker.updateOne({_id:req.params.id},{
        $set:{
            email : req.body.email,
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
                res.status(200).json({message:"Speaker Updated",data, success:true});

           })
           .catch((error)=>{
               next(error);
           })

}