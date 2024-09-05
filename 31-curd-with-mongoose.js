const mongoose = require("mongoose");

// CONNECT WITH MONGOOSE DATABASE
mongoose.connect("mongodb://localhost:27017/e-com");

// DEFINE THE DATABASE SCHEMA
const ProductSchema = new mongoose.Schema({
    name: String,
    price:Number,
    brand:String,
    Categoty:String,
});


//INSERT AND SAVE INTP THE DATABASE
const saveInDB = async () => {
    const productModel = mongoose.model('products',ProductSchema);
    let data = new productModel({ name: "M2",price:5000,brand :"apple",
        Categoty:'elextronics'
    });
    let result = await data.save();
    console.log(result);
}


// UPDATE IN DATABASE
const updateInDB=async()=>{
  const Product = mongoose.model("products",ProductSchema);
  let data = await Product.updateMany(
    {name:'s22'},
    {$set:{price:12300,name:"s23"}}
  )

  console.log(data);
}


//DELETE IN DB
const deleteInDB =async()=>{
    const Product  = mongoose.model('products',ProductSchema);
    let data = await Product.deleteOne({name:'s23'})
    console.log(data);
}


// SEARCH THE DATA IN DATABSE
const findInDB=async()=>{
    const Product = mongoose.model('products',ProductSchema);
    let data = await Product.find({name:'note 12'});
    console.log(data);
}

findInDB();