const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{
    let token, decodedToken;

    try
    {
        token = req.get("Authorization").split(" ")[1];
        decodedToken = jwt.verify(token,"ILoveChocolateCake");
    }
    catch
    {
        next(new Error("Not Authenticated"));
    }
    req.role = decodedToken.role;
    next();
}