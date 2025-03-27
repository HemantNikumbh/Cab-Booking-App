const userModel = require("../model/user.model")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const blackListTokenModel = require("../model/blacklisttoken.model");
const captainModel = require("../model/captain.model");

module.exports.authUser = async(req,res,next)=>{
    const token = req.cookies.token||req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message:"Access denied"});
    }

    const isBlacklisted = await blackListTokenModel.findOne({token:token});
    if(isBlacklisted){
        return res.status(401).json({message:"Access denied"});
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        req.user = user;
        return next();

    }catch(err){
        return res.status(400).json({message:"Invalid token"});
    }

}


module.exports.authCaptain = async(req,res,next) =>{
    const token  = req.cookies.token || req.headers.authorization.split(" ")[1]

    if(!token){
        return res.status(400).jsons({message:"Unathorize"})
    }

    const isBlacklisted = await blackListTokenModel.findOne({token:token})

    if(isBlacklisted){
        return res.status(400).json({message:"unauthorize"})
    }

    try{
        const decoded  = jwt.verify(token,process.env.JWT_SECRET)
        const captain = await captainModel.findById(decoded._id)

        if(!captain){
            return res.status(400).json({message:"captain not found"})
        }
        req.captain = captain;
        return next();

    }catch(err){
        console.log(err);
    }
}
