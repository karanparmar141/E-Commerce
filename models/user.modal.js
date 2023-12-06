const mongoose = require("mongoose")

const UserShcema = new mongoose.Schema({
    username : String,
    email : String,
    password : String
})

const UserModel = mongoose.model("user" , UserShcema)

module.exports = UserModel