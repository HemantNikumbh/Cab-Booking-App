const http = require('http');
const app = require('./app');   
const port = process.env.PORT || 3000;  // Set the port to 3000 or the environment variable PORT


const server = http.createServer(app); 


server.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});  // Start the server on port 3000      