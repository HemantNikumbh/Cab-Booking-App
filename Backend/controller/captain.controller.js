const blacklisttokenModel = require('../model/blacklisttoken.model');
const captainModel = require('../model/captain.model');
const captainService = require('../services/captain.service');
const blackListTokenModel = require('../model/blacklisttoken.model');
const { validationResult } = require('express-validator');


module.exports.registerCaptain = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });

    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: 'Captain already exist' });
    }


    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = captain.generateAuthToken();

    res.status(201).json({ token, captain });

}


module.exports.loginCaptin = async(req,res,next) =>{
     const error = validationResult(req)
     if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }

    const{email,password} = req.body;

    const captain = await captainModel.findOne({email}).select("+password")

    if(!captain){
        return res.status(400).jeson({message:"invalid email & password"})
    }
    
    const isMatch = await captain.comparePassword(password)

    if(!isMatch){
        return res.return(400).json({message:"invalid password"})
    }

    const token = captain.generateAuthToken();

    res.cookie("token",token)


    return res.status(200).json({token,captain});

}

module.exports.getCaptainProfile = async(req,res,next) =>{
    return res.status(200).json({captain:req.captain})
}

module.exports.Captainlogout = async(req,res,next) =>{
    res.clearCookie("token");
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    blackListTokenModel.create({token})
    res.status(200).json({message:"Logout Successfully"})

}