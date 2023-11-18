
/**
 * Instructions
1. Create a npm project and install Express.js (Nodemon if you want)
2. Change your Express.js app which serves HTML files (of your choice with your content) for “/”, “/users” and “/products”.
3. For “/users” and “/products”, provides GET and POST requests handling (of your choice with your content) in different routers. 
4. Add some static (.js or .css) files to your project that should be required by at least one of your HTML files.
5. Customize your 404 page
6. Provide your own error handling
 */



const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded());

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// app.get('/users', (req, res) => {
//   res.sendFile(__dirname + '/users.html');
// });

// app.get('/products', (req, res) => {
//   res.sendFile(__dirname + '/products.html');
// });



// Routers
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productRouter');

// Static files
app.use(express.static('public'));

// View files
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Routers
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// 404 Page
app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/views/404.html');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


  














