const dotenv = require('dotenv');   
dotenv.config();
const express = require('express');
const connectDB = require('./db/db');
const cookies = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
  // Import map routes
// const captainRoutes = require('./routes/captain.routes');

connectDB();
const app = express();
const cors = require('cors');

app.use(cors());
app.use(cookies());
app.use(express.json());    // Parse incoming request with JSON payloads


// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })
app.use(express.urlencoded({ extended: true }));    // Parse incoming request with urlencoded payloads
app.use(express.json());    // Parse incoming request with JSON payloads
app.use("/user",userRoutes);
app.use('/captains', captainRoutes);
//app.use('/map', mapRoutes);   // Use map routes




module.exports = app;   // Export the app module