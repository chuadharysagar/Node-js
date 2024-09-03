const express = require("express");
const path = require("path");
const app = express();

const filePath = path.join(__dirname,"public");


// express.static for showing static page on web browser -SHOWS WITH EXTENSION
app.use(express.static(filePath));

//SHOWING THE PAGE WITHOIUT EXTENSION

app.get('',(_,resp)=>{
    resp.sendFile(`${filePath}/index.html`);
})

app.get(`/about`,(_,resp)=>{
    resp.sendFile(`${filePath}/about.html`)
})

app.get(`/help`,(_,resp)=>{
    resp.sendFile(`${filePath}/help.html`)
})

app.get("/*",(_,resp)=>{
    resp.sendFile(`${filePath}/404.html`)
})

app.listen(5000);



