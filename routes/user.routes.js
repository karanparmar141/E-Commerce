const {Router} = require("express")
const { usercreate, signupui, loginui, login, data } = require("../controllers/user.controller")
const UserRoute = Router()

UserRoute.get("/data" , data)
UserRoute.get("/signup" , signupui)
UserRoute.post("/signup" , usercreate)
UserRoute.get("/login" , loginui)
UserRoute.post("/login" , login)


module.exports = UserRoute