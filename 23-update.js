const { ObjectId } = require('mongodb');
const dbConnection = require('./20-dataBase-connection');


const updateData = async()=>{
    const db = await dbConnection();
    let result = await db.updateOne({name:"mouse"},{$set :{name:"BigMouse",brand:"Ptron",price:9000}});
 
    console.warn(result);
 }
 