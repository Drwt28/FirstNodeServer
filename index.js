import express from "express";

import joi from "joi";
import fs from "fs";

import { buildResponse } from "./response.js";

const db = JSON.parse(fs.readFileSync("./data.json"));

const app = express();
//for uderstanding json
app.use(express.json());


app.get("/",(req,res)=>{
    var params = req.query;
    console.log(params);
     console.log("Hii Deepanshu i am from node js");
     return res.json({hello:"value"});
    
});


app.get("/questions/",(req,res)=>{
    var params = req.query; 
 
    var body ={};
 
    if(params.board !=null)
    {
        var board = params.board;
        db.data.forEach((e)=>{
            if(e.board==board)
            {
                body = e;
            }
        });
        return res.status(200).json(buildResponse({code:200,data:body,message:"Succesfully get data"}));
    }else{
        return res.status(404).json(buildResponse({code:404,data:{},message:"No Questions Found for selected BOARD"}));
    }

  
    
});


app.post("/post",(req,res)=>{

    var body = req.body;
    return res.json({"name":body.name});
});

app.post("/getAllQuestions",(req,res)=>{

    return res.json({"data":db.data});

});

app.listen(8080,()=>{
   console.log("Server Strated we can rev it up");
});
