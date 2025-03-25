const userModel = require('../model/user.model');
const userService = require("../services/user.service")
const {validationResult} = require('express-validator');
const blacklistTokenModel = require('../model/blacklisttoken.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


module.exports.register = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {fullname,email,password} = req.body;
    const hashPassword = await userModel.hashPassword(password);
    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashPassword
    });

    const token = user.generateAuthToken();
    return res.status(201).json({token,user});


}
module.exports.userlogin = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()});
    }
    const{email,password} = req.body;
    const user = await userModel.findOne({email}).select("+password");
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(400).json({message:"Invalid credentials"});
    }
    const token = user.generateAuthToken()
    res.cookie("token",token)
    return res.status(200).json({token,user});


}

module.exports.getuserprofile = async (req,res,next)=>{
    res.status(200).json({user:req.user});  // Get the user profile

}

module.exports.logout = async (req,res,next)=>{
    res.clearCookie("token");
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    await blacklistTokenModel.create({token});
    res.status(200).json({message:"Logged out successfully"});   // Logout the user

}