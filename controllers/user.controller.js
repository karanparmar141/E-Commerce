const bcrypt = require("bcrypt")
const UserModel = require("../models/user.modal")
const jwt = require("jsonwebtoken")


const data = async(req , res) =>{
    let data = await UserModel.find()
    res.json(data)
}
const signupui = (req,res) =>{
    res.render("signup")
}
const usercreate = async(req,res) =>{
    let {username , email , password} = req.body
    let data = await UserModel.findOne({email : email})
    
    if(data){
        res.redirect("/user/login")
    }
    else{
        bcrypt.hash(password , 5 , async(err , hash) =>{
            if(err){
                res.json(err)
            }
            else{
                let obj ={
                    username : username,
                    email : email,
                    password : hash
                }
                let data = await UserModel.create(obj)
                let token = jwt.sign({id : data._id} , "pass")
                res.cookie("token" , token).json(data)
            }
        })
    }
}
const loginui = (req, res) =>{
    res.render("login")
}
const login = async(req , res) =>{
    let {email , password} = req.body
    
    let data = await UserModel.findOne({email : email})
    if(data){
        bcrypt.compare(password , data.password , (err , result) =>{
            if(result){
                let token = jwt.sign({id : data._id} , "pass")
                res.cookie("token" , token).redirect("/product/proui")
            }
            else{
                res.json("password is incorrect")
            }
        })
    }
    else{
        res.redirect("/user/signup")
    }

}



module.exports = {signupui , usercreate , loginui , login, data}