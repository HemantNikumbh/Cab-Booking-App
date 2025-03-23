const mongoose = require('mongoose');   
// const dotenv = require('dotenv'); 


function connectDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('Connected to the database');
    }).catch((err)=>{
        console.log('Connection failed',err);
    } );
}

module.exports = connectDB;   // Export the connectDB module