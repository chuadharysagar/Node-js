 // to Connect to a server connection that is in another folder
 let dbConnection = require("./20-dataBase-connection")



 //MONGODB CONNECTION 
// dbConnection().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.warn(data);
//     })
// })



// async await function Mordern code 
const main =async ()=>{
    let data = await dbConnection();
    data = await data.find({}).toArray();
    console.log(data);
}

main();