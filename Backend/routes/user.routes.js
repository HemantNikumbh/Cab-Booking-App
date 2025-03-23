const express = require('express');
const router = express.Router();
const{body} = require('express-validator');
const userController = require('../controller/user.controller');    

router.post("/register",[
    body("email").isEmail().withMessage("Email is required"),
    body("fullname.firstname").isLength({min:3}).withMessage("First name is required"), 
    body("password").isLength({min:5}).withMessage("Password is required")
],
userController.register
);  // Register a new user

router.post("/Login",[
    body("email").isEmail().withMessage("Email is required"),
    body("password").isLength({min:5}).withMessage("Password is required"),

],
userController.userlogin
)



module.exports = router;   // Export the router module