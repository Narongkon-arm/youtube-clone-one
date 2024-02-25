// Import the HTTP module
const http = require('http');

// Import the Express application
const app = require('./app');

// Create a server using the Express application
const server = http.createServer(app);

// Extract the API_PORT from the environment variables
const { API_PORT } = process.env;

// Set the port for the server, if PORT is not defined, use the API_PORT
const port = process.env.PORT || API_PORT;

//server listening
// Start the server and make it listen to the defined port
server.listen(port ,() =>{
    console.log(`Server running on port ${port}`);
})