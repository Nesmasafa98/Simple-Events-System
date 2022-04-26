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
    Speaker.find({})
           .then((data) => {
               res.status(200).json({ message: data });
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
    Speaker.find({_id:req.body.id})
    .then((data) => {
        res.status(200).json({ message: data });
    })
    .catch((error) => {
        next(error);
    })
    
}

// module.exports.createSpeaker = (req,res,next)=>{

//     //validation
//     let result = validationResult(req);
//     if (!result.isEmpty()) {
//         let message = result.array().reduce((current, error) => current + error.msg + ", ", " ");
//         let error = new Error(message);
//         error.status = 422;
//         throw error;

//     }
//     //response
//     let speaker = new Speaker({

//         _id : mongoose.Types.ObjectId,
//         email : req.body.email,
//         username : req.body.username,
//         password : req.body.password,
//         city : req.body.city,
//         street : req.body.street,
//         building : req.body.buildingNo

//     });

//     speaker.save()
//            .then((data)=>{

//                 res.status(201).json({message:"Speaker Added" , data});

//            })
//            .catch((error)=>{

//                next(error);

//            })

// }


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
    Speaker.updateOne({_id:req.body.id},{
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
                res.status(200).json({message:"Speaker Updated",data});

           })
           .catch((error)=>{
               next(error);
           })

}