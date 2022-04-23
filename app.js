//NPM Packages
const express = require("express");
const bodyParser = require("body-parser");

//Built Packages
const studentRouter = require("./Routers/studentRouter");
const speakerRouter = require("./Routers/speakerRouter");
const eventRouter = require("./Routers/eventRouter");


//Server Setup
const server = express();
server.listen(process.env.PORT || 8080, ()=>{
    console.log("Server is Listening");
});

//MiddleWares

//Logger MW

server.use((req, res, next)=>{

    console.log("URL : " + req.url, "Method : " + req.method);
    next();

})

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

//Routers

//Student Router
server.use(studentRouter);

//Speaker Router
server.use(speakerRouter);

//Event Router
server.use(eventRouter);

//Not Found MW

server.use((req, res, next) => {

    res.status(404).json({ message: "Page Not Found" });

})

//Error MW

server.use((error, req, res, next)=>{
    //change on production
    res.status(500).json({message: error + " "});

})