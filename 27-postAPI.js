// POST API TO AQUIRE THE DATA FROM WEBSITE 
// STORE IT IN DATABASE 

const express = require("express");
const app = express();
const dbConnection = require('./20-dataBase-connection');

app.use(express.json());

app.get('/', async (res, resp) => {
    const data = await dbConnection();
    let result = await data.find().toArray();
    resp.send(result);
});

app.post('/', async (req, resp) => {
    resp.send({ name: "sagar" });

    //INSERT THE DATA INTO DB;
    let db = await dbConnection();
    let result = await db.insertOne(req.body);
    if (result.acknowledged) {
        console.log("inserted to databse");
    }
});

app.listen(4500);