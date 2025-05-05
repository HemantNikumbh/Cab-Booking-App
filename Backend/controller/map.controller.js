const { validationResult } = require('express-validator');
const mapservice = require('../services/map.service');   

module.exports.getcoordinates = async(req,res)=>{
    const errors = validationResult(req);   // Validate the request using express-validator
    if (!errors.isEmpty()) {   // Check if there are validation errors
        return res.status(400).json({ errors: errors.array() });   // Return 400 status with error messages
    }
    const{address} = req.body;   // Destructure address from request body
    try{
        const coordinates = await mapservice.getAddresss(address);   // Call the service to get coordinates
        res.status(200).json(coordinates);   // Send the coordinates as a response  



    }catch(err){
        console.log("error in getting coordinates",err.message);    
    }
}