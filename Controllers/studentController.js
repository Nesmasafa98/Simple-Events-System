const {validationResult} = require("express-validator");

module.exports.getStudents = (req,res)=>{

    res.status(200).json({message:"Students List"});

}


module.exports.getStudentById = (req,res)=>{

    //validation
    let result = validationResult(req);
    if (!result.isEmpty()) {
        let message = result.array().reduce((current, error) => current + error.msg + " ", " ");
        let error = new Error(message);
        error.status = 422;
        throw error;
    }
    //response
    res.status(200).json({message:"Student By ID"});

}


module.exports.createStudent = (req,res)=>{

    res.status(201).json({message:"Student Created"});

}


module.exports.updateStudent = (req,res)=>{

    res.status(200).json({message:"Student Updated"});

}


module.exports.deleteStudent = (req,res)=>{

    res.status(200).json({message:"Student Deleted"});
    
}