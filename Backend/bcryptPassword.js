const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.hashPassword = (req,res,next)=>{

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        req.body.password = hash;
        next();
    }); 
    
}

