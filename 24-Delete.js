const { ObjectId } = require('mongodb');
const dbConnection = require('./20-dataBase-connection');


const delData =async()=>{
    try {
     const db = await dbConnection();
     let result = await db.deleteMany({product:'mobile'});

     if(result.acknowledged){
     console.log(result);
     console.log("Record deleted");
     }
     
    } catch (error) {
     console.error("Error deleting data",error);
    }
 }
 