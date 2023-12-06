const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title : String,
    des : String,
    img : String,
    price : Number,
    userId : String
})

const ProductModal = mongoose.model("product" , ProductSchema)

module.exports = ProductModal