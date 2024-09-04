// TO SEND THE DATA FROM DB TO FRONTEND BACKEND

const express = require("express");
const app = express();
const dbConnection = require('./20-dataBase-connection');

app.get('/',async(res,resp)=>{
    const data = await dbConnection();
    let result = await data.find().toArray();
    resp.send(result);
});

app.listen(5000);