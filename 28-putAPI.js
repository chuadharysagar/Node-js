//TO UPDATE THE EXISTING DATA IN DB

const express = require("express");
const app = express();
const dbConnection = require('./20-dataBase-connection');

app.use(express.json());


//PUT API TO UPDATE THE DATA IN DB
app.put('/:name',async(req,resp)=>{
    let db = await dbConnection();
    let result = db.updateOne(
        {name:req.params.name},
        {$set:req.body}
    );
    
    console.log(req.body);
    resp.send({result:"Updated"});
})


app.listen(4500);