const {validationResult} = require("express-validator")

module.exports.getSpeakers = (req,res)=>{

    res.status(200).json({message:"Speakers List"});

}

module.exports.getSpeakerById = (req,res)=>{

    res.status(200).json({message:"Speaker By ID"});
    
}

module.exports.createSpeaker = (req,res)=>{

    //validation
    let result = validationResult(req);
    if (!result.isEmpty()) {
        let message = result.array().reduce((current, error) => current + error.msg + ", ", " ");
        let error = new Error(message);
        error.status = 422;
        throw error;
    }
    //response
    res.status(201).json({message:"Speaker Added"});

}


module.exports.updateSpeaker = (req,res)=>{

    res.status(200).json({message:"Speaker Updated"});


}


module.exports.deleteSpeaker = (req,res)=>{
    
    res.status(200).json({message:"Speaker Deleted"});

}