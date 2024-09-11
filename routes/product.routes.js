const {Router} = require("express")
const { productui, productcreate, product, allproduct, productsui, cartcreate, cartui, cartdata } = require("../controllers/product.controller")
const { auth } = require("../middleware/auth")
const ProRoute = Router()

ProRoute.get("/proui" , auth ,productui)
ProRoute.post("/create" , auth ,  productcreate)
ProRoute.get("/products" , auth,product)
ProRoute.get("/allproduct" , allproduct)
ProRoute.get("/productsui" ,  productsui)
ProRoute.get("/cart" ,auth, cartui)
ProRoute.get("/cartdata" ,auth, cartdata)
ProRoute.post("/cart" , auth ,  cartcreate)

module.exports = ProRoute