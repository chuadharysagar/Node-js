const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,"curd");
const filePath = `${dirPath}/apple.txt`;
// console.log(filePath);

// fs.writeFileSync(filePath,"this is apple file folder");

// READ FILE 
// fs.readFile(filePath,'utf8',(err,item)=>{  // return the buffer -->> add utf8
//     console.log(item);
// })


//UIPDATE FILE APPEND -->

// fs.appendFile(filePath,"this is append portion of the file",(err)=>{
//     if(!err){console.log("content appended sucessfully !!..")}
// })


//RENAME THE FILE NAME 
// fs.rename(filePath ,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err){
//         console.log("file name is updated sucessfully");
//     }
// })


// DELETION OF FILE
fs.unlinkSync(`${dirPath}/fruit.txt`); 