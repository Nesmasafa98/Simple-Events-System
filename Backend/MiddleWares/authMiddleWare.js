const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{
    let token, decodedToken;

    try
    {
        if(req.get("Authorization"))
        {
            token = req.get("Authorization").split(" ")[1];
            decodedToken = jwt.verify(token, "ILoveChocolateCake");
            req.role = decodedToken.role;
        }
        next();
    }
    catch
    {
        next(new Error("Not Authenticated"));
    }

}