const {validationResult} = require("express-validator");
const Event = require("./../Models/eventModel");

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
module.exports.getEvents = (req,res,next)=>{

    AssignRoleAdmin(req);
    Event.find({})
          .then((data)=>{
            let events = [];
            for (let i = 0; i < data.length; i++) {
                events.push(data[i].transform());
            }
            res.status(200).json(events);

          })
          .catch((error)=>{
              next(error);
          })

}

module.exports.getEventById = (req,res,next)=>{

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
    Event.findOne({_id:req.params.id})
          .then((data)=>{
            
            res.status(200).json(data.transform());

          })
          .catch((error)=>{
              next(error);
          })
    
}

module.exports.createEvent = (req,res,next)=>{

    AssignRoleAdmin(req);
    //validation
    let result = validationResult(req);
    if(!result.isEmpty())
    {
        let message = result.array().reduce((current,error)=>current + error.msg + ", " , " ");
        let error = new Error(message);
        error.status = 422;
        throw error;
    }
    //response 
    const event = new Event({
        title : req.body.title,
        eventDate : req.body.eventDate,
        mainSpeaker : req.body.mainSpeaker ,
        otherSpeakers : req.body.otherSpeakers ,
        students : req.body.students
    })

    event.save()
         .then((data)=>{

            res.status(201).json({message:"Event Added",data,success:true});

         })
         .catch((error)=>{
             next(error);
         })

}


module.exports.updateEvent = (req,res,next)=>{

    AssignRoleAdmin(req);
     //validation
     let result = validationResult(req);
     if(!result.isEmpty())
     {
         let message = result.array().reduce((current,error)=>current + error.msg + ", " , " ");
         let error = new Error(message);
         error.status = 422;
         throw error;
     }
     //response 
    Event.updateOne({_id:req.params.id},{
        $set:{
            title : req.body.title,
            eventDate : req.body.eventDate,
            mainSpeaker : req.body.mainSpeaker ,
            otherSpeakers : req.body.otherSpeakers,
            students : req.body.students
        }
        })
           .then((data)=>{

                if(data.matchedCount == 0)
                {
                    throw new Error("Event Not Found");
                }
                res.status(200).json({message:"Event Updated",data, success:true});

           })
           .catch((error)=>{
               next(error);
           })

}


module.exports.deleteEvent = (req,res,next)=>{

    AssignRoleAdmin(req);
     //validation
     let result = validationResult(req);
     if(!result.isEmpty())
     {
         let message = result.array().reduce((current,error)=>current + error.msg + ", " , " ");
         let error = new Error(message);
         error.status = 422;
         throw error;
     }
     //response 
    Event.deleteOne({_id:req.params.id})
           .then((data)=>{

            if(data.matchedCount == 0)
            {
                throw new Error("Event Not Found");
            }
            res.status(200).json({message:"Event Deleted",data, success:true});

           })
           .catch((error)=>{
               next(error);
           })
    
}

module.exports.viewStudentEvents = (req,res,next)=>{

    AssignRoleStudent(req);
    //validation
    let result = validationResult(req);
    if(!result.isEmpty())
    {
        console.log(result);
        let message = result.array().reduce((current,error)=>current + error.msg + ", " , " ");
        let error = new Error(message);
        error.status = 422;
        throw error;
    }
    //response 
    Event.find({students:req.params.id})
    .then((data)=>{
        let events = [];
        for (let i = 0; i < data.length; i++) {
            events.push(data[i].transform());
        }
      res.status(200).json(events);

    })
    .catch((error)=>{
        next(error);
    })
}

module.exports.viewSpeakerEvents = (req,res,next)=>{

    AssignRoleSpeaker(req);
    //validation
    let result = validationResult(req);
    if(!result.isEmpty())
    {
        console.log(result);
        let message = result.array().reduce((current,error)=>current + error.msg + ", " , " ");
        let error = new Error(message);
        error.status = 422;
        throw error;
    }
    //response 
    Event.find({$or: [ { mainSpeaker: req.params.id }, { otherSpeakers: req.params.id } ]})
    .then((data)=>{
        let events = [];
        for (let i = 0; i < data.length; i++) {
            events.push(data[i].transform());
        }
      res.status(200).json(events);

    })
    .catch((error)=>{
        next(error);
    })
}

module.exports.assignStudentsToEvent = (req,res,next)=>{

    AssignRoleAdmin(req);
    //validation
    let result = validationResult(req);
    if(!result.isEmpty())
    {
        console.log(result);
        let message = result.array().reduce((current,error)=>current + error.msg + ", " , " ");
        let error = new Error(message);
        error.status = 422;
        throw error;
    }
    //response 
    Event.updateOne({_id:req.params.id},{
        $addToSet:{students: req.body.students}
    })
         .then((data)=>{
             if(data.matchedCount == 0)
             {
                 throw new Error("Event Not Found");
             }
             res.status(200).json({message:"Students Assigned",data, success:true});

            })
            .catch((error)=>{
                next(error);
            })

}

module.exports.assignMainSpeakerToEvent = (req,res,next)=>{
    AssignRoleAdmin(req);
    //validation
    let result = validationResult(req);
    if(!result.isEmpty())
    {
        console.log(result);
        let message = result.array().reduce((current,error)=>current + error.msg + ", " , " ");
        let error = new Error(message);
        error.status = 422;
        throw error;
    }
    //response
    Event.updateOne({_id:req.params.id},{
        $set:{mainSpeaker: req.body.mainSpeaker}
    })
         .then((data)=>{
             if(data.matchedCount == 0)
             {
                 throw new Error("Event Not Found");
             }
             res.status(200).json({message:"Main Speaker Assigned",data, success:true});

            })
            .catch((error)=>{
                next(error);
            })

}

module.exports.assignOtherSpeakersToEvent = (req,res,next)=>{
    AssignRoleAdmin(req);
    //validation
    let result = validationResult(req);
    if(!result.isEmpty())
    {
        console.log(result);
        let message = result.array().reduce((current,error)=>current + error.msg + ", " , " ");
        let error = new Error(message);
        error.status = 422;
        throw error;
    }
    //response
    Event.updateOne({_id:req.params.id},{
        $addToSet:{otherSpeakers: req.body.otherSpeakers}
    })
         .then((data)=>{
             if(data.matchedCount == 0)
             {
                 throw new Error("Event Not Found");
             }
             res.status(200).json({message:"Speakers Assigned",data, success:true});

            })
            .catch((error)=>{
                next(error);
            })

}
