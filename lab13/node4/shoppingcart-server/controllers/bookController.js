const Book = require('../models/Book');

exports.getBooks = (req, res, next) => {
    res.status(200).json(Book.fetchAll());
}

exports.getBookById = (req, res, next) => {
    res.status(200).json(Book.findById(req.params.bookId));
}

exports.save = (req, res, next) => {
    const {title, ISBN, publishedDate, author} = req.body;
    const savedBook = new Book(null, title, ISBN, publishedDate, author).save();
    console.log(`saved Book: ${savedBook}`)
    res.status(201).json(savedBook);
}

exports.update = (req, res, next) => {
    const {title, ISBN, publishedDate, author} = req.body;
    const updatedBook = new Book(req.params.bookId,title, ISBN, publishedDate, author).update();
    res.status(200).json(updatedBook);
}

exports.deleteById = (req, res, next) => {
    Book.deleteById(req.params.bookId);
    res.status(200).end();
}