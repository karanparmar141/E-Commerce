const mongoose = require("mongoose")
require("dotenv").config()

const connect = async() =>{
    await mongoose.connect("mongodb+srv://piyush:piyush@cluster0.mlxbum3.mongodb.net/project?retryWrites=true&w=majority")
    console.log("database is connect")
}

module.exports = connect