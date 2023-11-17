/**
 * Create a web server that's going to send a response of big image to any client that sends a request 
 * to your specified server:port.
 */

// Import necessary modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Server configuration
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Path to the image file
    const imagePath = path.join(__dirname, 'large-image.png'); 

    // Read the image file and send it as the response
    fs.readFile(imagePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end("Error loading the image");
        } else {
            // Set the content type to image/jpeg
            res.setHeader('Content-Type', 'image/png');
            res.statusCode = 200;
            res.end(data);
        }
    });
});

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
