const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect("mongodb://localhost:27017/e-com");

app.use(express.json());

const ProductSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        brand: String,
        Categoty: String,
    }
);

app.post('/', async (req, resp) => {
    resp.send({ brand: "samsung" });

    const Product = mongoose.model('products', ProductSchema);
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result);

});


app.listen(5000);