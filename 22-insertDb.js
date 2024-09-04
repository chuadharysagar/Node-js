const { ObjectId } = require('mongodb');
const dbConnection = require('./20-dataBase-connection');



// Insert the data 
const insert= async()=>{
    const db = await dbConnection();
    const result = db.insertMany(
        [{
            name:"charger",
            brand:"Mk1200",
            price:"2400",
            category:"electronic",
        },
        {
            name:"router",
            brand:"mini",
            price:"1400",
            category:"Chrager",
        }]
    )
    if(result.acknowledged){
        console.log("data inserted");

    }
}

insert();