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
        country :'Nepal',
        skills :['Python','Java','C','C++','js'],
    }
    resp.render('profile',{user});
})


app.get('/login',(_,resp)=>{
    resp.render('login');
})

// app.get('/header',(_,resp)=>{
//     resp.render('header');
// })   

//Ejs file rendering

app.listen(5000,()=>{
    console.log("server is running on port 5000");
});

