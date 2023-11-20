
/**
 * nstructions
1. Download the start-up project shoppingcart-server from class demo or you create everything from scrtach.
2. Run "npm install" under shoppingcart-server to get express package installed.
3. Implement the features below inside shoppingcart-server REST applicaiton
    1. CRUD(create, read, update, delete) books: make sure you use the proper URLs and HTTP Methods
    2. A book has properties: id, title, ISBN, publishedDate, author
    3. make proper changes in js files to implement the step 1 features
    4. Use Postman to test your REST APIs

 */
const express = require('express');
const bookRouter = require('./routes/book-router');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/books', bookRouter);

app.use((req, res, next) => {
    res.status(404).json({ error: req.url + ' API not supported!' });
});

app.use((err, req, res, next) => {
    if (err.message === 'NOT Found') {
        res.status(404).json({ error: err.message });
    } else {
        console.log(err.message)
        res.status(500).json({ error: 'Something is wrong! Try later' });
    }
});

app.listen(3000, () => console.log('listening to 3000...'));