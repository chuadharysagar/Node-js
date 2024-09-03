const express = require("express");
const path = require("path");
const app = express();

const filePath = path.join(__dirname,"public");

app.set('view engine','ejs');

app.get('/',(_,resp)=>{
    resp.sendFile(`${filePath}/index.html`);
});


app.get('/profile',(_,resp)=>{
    const user={
        name :"sagar",
        email:"sagar@gmail.com",
        age:21,
    }
    resp.render('profile',{user});
})


//Ejs file rendering

app.listen(5000,()=>{
    console.log("server is running on port 5000");
});

