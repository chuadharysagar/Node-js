let express = require('express');
let app= express();

app.get('',(req,resp)=>{
    console.log("data sent by user", req.query);
    console.log("data sent by user", req.query.name);

    resp.send("Hello this is home page");
})

app.get("/about",(req,resp)=>{
    resp.send("This is about page");
})

app.get("/help",(req,resp)=>{
    resp.send("hello this is about page");
});

app.listen(5000)