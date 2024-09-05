const express = require("express");
require("./32-mongooseConfig");
const Product = require('./products');
const app = express();

//Get api using mongose
// Get data from the server 
app.get("/list",async(req,resp)=>{
    let data = await Product.find({});
    resp.send(data);
})

app.listen(5000);