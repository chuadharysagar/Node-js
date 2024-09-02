let fs = require('fs');

const input = process.argv;

if(input[2] =='add'){
  fs.writeFileSync(input[3],input[4]);
}
else if(input[2] =='remove'){
   fs.unlinkSync(input[3]); 
}
else{
  console.log("invalied command");
}


const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'files');
console.log(dirPath);

// for(let i =0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,"hello this file is created via loop");
// }


// To delete all the files created via loop
// for(let i =0;i<5;i++){
//     fs.unlinkSync(`${dirPath}/hello${i}.txt`); 
// }

// fs.readdir(dirPath,(err,files)=>{
//     console.log(files);
// })


// each item is readed by for each loop 
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log(item);
    })
})