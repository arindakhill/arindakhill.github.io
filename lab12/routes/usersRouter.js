const express = require('express');
const router = express.Router();
const path = require('path')

// GET request for /users
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views' ,'users.html'));
});

// POST request for /users
// router.post('/', (req, res) => {
//   // Handle the post request
//   res.send('POST request to the users page');
// });

router.post('/', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    // Process the data, e.g., save to database
    res.send(`Username: ${username}, Email: ${email}`);
  });

module.exports = router;
