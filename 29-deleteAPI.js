const express = require("express");
const app = express();
const dbConnection = require('./20-dataBase-connection');
const mongodb = require("mongodb");


//DELETE THE DATA FROM THE DATA BASE 
app.delete("/:id",async(res,resp)=>{
    console.log(res.params.id);
    let db = await dbConnection();
    let result = await db.deleteOne({_id:new mongodb.ObjectId(res.params.id)});

    console.log(result);
    resp.send({Presult:"Done"});
})