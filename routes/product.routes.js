const {Router} = require("express")
const { productui, productcreate, product } = require("../controllers/product.controller")
const { auth } = require("../middleware/auth")
const ProRoute = Router()

ProRoute.get("/proui" , auth ,productui)
ProRoute.post("/create" , auth ,  productcreate)
ProRoute.get("/products" , auth,product)

module.exports = ProRoute