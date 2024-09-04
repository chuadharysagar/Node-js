const {MongoClient} = require('mongodb');

const database ='e-com'
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect(); //  fro result return a promise
    let db = result.db(database);
    let collection = db.collection('products');
    let response = await collection.find({brand:'redmi'}).toArray();
    console.log(response);
}


getData();