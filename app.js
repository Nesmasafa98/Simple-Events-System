//NPM Packages
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Custom Packages
const studentRouter = require("./Routers/studentRouter");
const speakerRouter = require("./Routers/speakerRouter");
const eventRouter = require("./Routers/eventRouter");

//variables
const port = process.env.PORT || 8080;

//Server and DB Setup
const server = express();
mongoose.connect("mongodb://localhost:27017/SimpleEventsSystemDB")
        .then(()=>{

            console.log("DB connected successfully");
            server.listen(port, ()=>{

                console.log("Server is listening");

            });

        })
        .catch(error=>console.log("DB connection failed"))

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