let mongoose = require('mongoose');

const productShcema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        brand: String,
        Categoty: String,
    }
)

module.exports = mongoose.model("products",productShcema);

