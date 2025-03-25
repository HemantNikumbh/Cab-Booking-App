const userModel = require("../model/user.model")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports.authUser = async(req,res,next)=>{
    const token = req.cookies.token||req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message:"Access denied"});
    }

    const isBlacklisted = await userModel.findOne({token:token});
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
