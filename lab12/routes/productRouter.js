const express = require('express');
const router = express.Router();

// GET request for /products
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/../views/products.html');
});

// POST request for /products
// router.post('/', (req, res) => {
//   // Handle the post request
//   res.send('POST request to the products page');
// });
router.post('/', (req, res) => {
    const productName = req.body.productName;
    const price = req.body.price;
    // Process the data, e.g., save to database
    res.send(`Product: ${productName}, Price: ${price}`);
  });

module.exports = router;
