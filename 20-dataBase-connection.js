const { MongoClient } = require("mongodb");

const databse = "e-com";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);


async function dbConnection() {
    let result = await client.connect();
    let db = result.db(databse);
    return db.collection("products");
}

//MONGODB CONNECTION 
// dbConnection().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.warn(data);
//     })
// })

// async await function Mordern code 
module.exports = dbConnection;