const express = require("express");
const app = express();
const dbConnection = require('./20-dataBase-connection');
const mongodb = require("mongodb");

app.use(express.json());

app.get('/', async (res, resp) => {
    const data = await dbConnection();
    let result = await data.find().toArray();
    resp.send(result);
});

//INSERT THE DATA INTO DB;
app.post('/', async (req, resp) => {
    resp.send({ name: "sagar" });
    let db = await dbConnection();
    let result = await db.insertOne(req.body);
    if (result.acknowledged) {
        console.log("inserted to databse");
    }
});


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


//DELETE THE DATA FROM THE DATA BASE 
app.delete("/:id",async(res,resp)=>{
    console.log(res.params.id);
    let db = await dbConnection();
    let result = await db.deleteOne({_id:new mongodb.ObjectId(res.params.id)});

    console.log(result);
    resp.send({Presult:"Done"});
})


app.listen(4500);