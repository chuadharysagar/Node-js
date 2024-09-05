const express = require('express');
require('./32-mongooseConfig');
const Product = require('./products');
const app = express();

app.use(express.json()); // TO PARSE THW JSON DATA

app.post('/create', async (req, resp) => {
    resp.send("done");
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result);

});


app.listen(5000);