const {validationResult} = require("express-validator");
const Event = require("./../Models/eventModel");

module.exports.getEvents = (req,res,next)=>{

    events.find({})
          .then((data)=>{

            res.status(200).json({data});

          })
          .catch((error)=>{
              next(error);
          })

}

module.exports.getEventById = (req,res,next)=>{

    events.find({_id:req.body.id})
          .then((data)=>{

            res.status(200).json({data});

          })
          .catch((error)=>{
              next(error);
          })
    
}

module.exports.createEvent = (req,res,next)=>{
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
        _id : req.body.id,
        title : req.body.title,
        eventDate : req.body.date,
        mainSpeaker : req.body.mainSpeaker ,
        otherSpeakers : req.body.otherSpeakers ,
        students : req.body.students
    })

    event.save()
         .then((data)=>{

            res.status(201).json({message:"Event Added",data});

         })
         .catch((error)=>{
             next(error);
         })

}


module.exports.updateEvent = (req,res)=>{

    Event.updateOne({_id:req.body.id},{
        $set:{
            _id : req.body.id,
            title : req.body.title,
            eventDate : req.body.date,
            mainSpeaker : req.body.mainSpeaker ,
            otherSpeakers : req.body.otherSpeakers,
            students : req.body.students
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


module.exports.deleteEvent = (req,res)=>{

    Event.deleteOne({_id:req.body.id})
           .then((data)=>{

            if(data.matchedCount == 0)
            {
                throw new Error("Event Not Found");
            }
            res.status(200).json({message:"Event Deleted",data});

           })
           .catch((error)=>{
               next(error);
           })
    
}
