const {validationResult} = require("express-validator");

module.exports.getEvents = (req,res)=>{

    res.status(200).json({message:"Events List"});

}

module.exports.getEventById = (req,res)=>{

    res.status(200).json({message:"Event By ID", id: req.params["id"]});
    
}

module.exports.createEvent = (req,res)=>{
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
    res.status(201).json({message:"Event Added"});

}


module.exports.updateEvent = (req,res)=>{

    res.status(200).json({message:"Event Updated"});

}


module.exports.deleteEvent = (req,res)=>{

    res.status(200).json({message:"Event Deleted"});
    
}
