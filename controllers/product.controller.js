const cart = require("../models/cart.modal")
const ProductModal = require("../models/product.modal")

const productui = (req , res) =>{
    res.render("addproduct")
}
const productcreate = async(req , res) =>{
    let data = await ProductModal.create(req.body)
    res.send(data)
}

const product = async(req , res) =>{
    let data = await ProductModal.find({userId : req.body.userId})
    res.json(data)
}

const allproduct = async(req , res) =>{
    let data = await ProductModal.find()
    res.json(data)
}

const productsui = async(req, res) =>{
    res.render("product")
}


// cart 
const cartui = (req , res) =>{
    res.render("cart")
}
const cartcreate = async(req , res) =>{
    let data = await cart.create(req.body)
    res.json(data)
}
const cartdata = async (req , res) =>{
    let data = await cart.find({userId : req.body.userId}).populate("productId")
    res.json(data)
}

module.exports = {productui , productcreate , product , allproduct , productsui , cartcreate , cartui , cartdata}