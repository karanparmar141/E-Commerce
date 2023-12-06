const ProductModal = require("../models/product.modal")

const productui = (req , res) =>{
    res.render("product")
}
const productcreate = async(req , res) =>{
    let data = await ProductModal.create(req.body)
    res.send(data)
}

const product = async(req , res) =>{
    let data = await ProductModal.find({userId : req.body.userId})
    res.json(data)
}

module.exports = {productui , productcreate , product}