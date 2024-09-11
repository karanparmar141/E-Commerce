const mongoose = require("mongoose")


const CartSchema = new mongoose.Schema({
    productId : {type : mongoose.Schema.Types.ObjectId , ref : "product"},
    userId : {type : mongoose.Schema.Types.ObjectId , ref : "user"},
    qty : {type : Number , default : 1}
})

const cart = mongoose.model("cart" , CartSchema)

module.exports = cart