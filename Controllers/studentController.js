const {validationResult} = require("express-validator");
const Student = require("./../Models/studentModel");



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
module.exports.getStudents = (req,res,next)=>{

    AssignRoleAdmin(req);
    Student.find({})
           .then((data)=>{

            res.status(200).json({data});

           })
           .catch((error)=>{
               next(error);
           })

}


module.exports.getStudentById = (req,res,next)=>{

    AssignRoleAdmin(req);
    //validation
    let result = validationResult(req);
    if (!result.isEmpty()) {
        let message = result.array().reduce((current, error) => current + error.msg + " ", " ");
        let error = new Error(message);
        error.status = 422;
        throw error;
    }
    //response
    Student.find({_id:req.body.id})
           .then((data)=>{

                res.status(200).json({data});

           })
           .catch((error)=>{
               next(error);
           })
   

}


// module.exports.createStudent = (req,res,next)=>{

//     //validation
//     let result = validationResult(req);
//     if (!result.isEmpty()) {
//         let message = result.array().reduce((current, error) => current + error.msg + " ", " ");
//         let error = new Error(message);
//         error.status = 422;
//         throw error;
//     }
//     //response
//     const student = new Student({
//         _id : req.body.id,
//         username : req.body.username,
//         email : req.body.email,
//         password : req.body.password
//     });

//     student.save()
//            .then((data)=>{

//                 res.status(201).json({message:"Student Created",data});

//            })
//            .catch((error)=>{
//                next(error);
//            })

// }


module.exports.updateStudent = (req,res,next)=>{

    AssignRoleStudent(req);
    //validation
    let result = validationResult(req);
    if (!result.isEmpty()) {
        let message = result.array().reduce((current, error) => current + error.msg + " ", " ");
        let error = new Error(message);
        error.status = 422;
        throw error;
    }
    //response  
    Student.updateOne({_id:req.body.id},{
        $set:{
            _id : req.body.id,
            email : req.body.email,
            username : req.body.username,
            password : req.body.password
        }
    })
           .then((data)=>{
               if(data.matchedCount == 0)
               {
                   throw new Error("Student Not Found");
               }

               res.status(200).json({message:"Student Updated",data});
           })
           .catch((error)=>{
               next(error);
           })

}


module.exports.deleteStudent = (req,res,next)=>{

    AssignRoleAdmin(req);
    //validation
    let result = validationResult(req);
    if (!result.isEmpty()) {
        let message = result.array().reduce((current, error) => current + error.msg + " ", " ");
        let error = new Error(message);
        error.status = 422;
        throw error;
    }
    //response
    Student.deleteOne({_id:req.body.id})
           .then((data)=>{

            if(data.matchedCount == 0)
            {
                throw new Error("Student Not Found");
            }
            res.status(200).json({message:"Student Deleted",data});

           })
           .catch((error)=>{
               next(error);
           })
    
}

module.exports.editStudentPartial = (req,res,next)=>{

    AssignRoleAdmin(req);
    //validation
    let result = validationResult(req);
    if (!result.isEmpty()) {
        let message = result.array().reduce((current, error) => current + error.msg + " ", " ");
        let error = new Error(message);
        error.status = 422;
        throw error;
    }
    //response
    Student.updateOne({_id:req.body.id},{
        $set:{
            email : req.body.email,
        }
    })
           .then((data)=>{
               if(data.matchedCount == 0)
               {
                   throw new Error("Student Not Found");
               }

               res.status(200).json({message:"Student Updated",data});
           })
           .catch((error)=>{
               next(error);
           })

}

