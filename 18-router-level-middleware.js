const express = require("express");
const reqFilter = require("./middleware");
const app = express();
//FOR UNIVERSAL ROUTER OF THE OTHER PAGE
const route = express.Router();

// lets  use middleware 

// app.use(reqFilter);
route.use(reqFilter);
// To use middle ware on any page use route inplace of app

app.get('/', (req, resp) => {
    resp.send("welcome to home Page");
})

route.get('/about',(req, resp) => {
    resp.send("Welcome to About section");
});

app.get('/help',(req,resp)=>{
    resp.send("help section");
});

route.get('/contact',(req,resp)=>{
    resp.send("Contact page");
});

app.use('/',route);

app.listen(5000, () => { console.log("app starting at 5000 port"); })