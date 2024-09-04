const { ObjectId } = require('mongodb');
const dbConnection = require('./20-dataBase-connection');



// Insert the data 
// const insert= async()=>{
//     const db = await dbConnection();
//     const result = db.insertMany(
//         [{
//             name:"charger",
//             brand:"Mk1200",
//             price:"2400",
//             category:"electronic",
//         },
//         {
//             name:"router",
//             brand:"mini",
//             price:"1400",
//             category:"Chrager",
//         }]
//     )
//     if(result.acknowledged){
//         console.log("data inserted");

//     }
// }


// read data 
const readData = async()=>{
    const db = await dbConnection();
    let result = await db.find({}).toArray();
    console.log(result);
}


// delete the data 
const delData =async()=>{
   try {
    const db = await dbConnection();
    let result = await db.deleteOne({product:'mobile'});
    console.log(result);
   } catch (error) {
    console.error("Error deleting data",error);
   }
}


// UPDATE DATA 
// const updateData = async()=>{
//    const db = await dbConnection();
//    let result = await db.updateOne({name:"mouse"},{$set :{name:"BigMouse",brand:"Ptron",price:9000}});

//    console.warn(result);
// }


readData();