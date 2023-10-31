const router = require('express').Router();
var Book = require('../models/Book');

//* @desc      Add a new book
//* @route     POST /api/books
router.post('/', async (req, res, next) => {
  try {
    const books = await Book.create(req.body);
    res.status(200).json({ books });
  } catch (err) {
    return next(err);
  }
});

//* @desc      list of all books
//* @route     GET /api/books
router.get('/', async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json({ books });
  } catch (err) {
    return next(err);
  }
});

//* @desc      details of a specific book by its ID
//* @route     GET /api/books/:id
router.get('/:id', async (req, res, next) => {
  try {
    var id = req.params.id;
    const books = await Book.findById(id).lean().exec();
    res.status(200).json({ books });
  } catch (err) {
    return next(err);
  }
});

//* @desc      Update a book's details
//* @route     PUT /api/books/:id/update
router.put('/:id/update', async (req, res, next) => {
  try {
    var id = req.params.id;
    const books = await Book.findByIdAndUpdate(id, req.body, { new: true });
    console.log(books);
    res.status(200).json({ books });
  } catch (err) {
    return next(err);
  }
});

//* @desc      Delete a book
//* @route     DELETE /api/books/:id/delete
router.delete('/:id/delete', async (req, res, next) => {
  try {
    var id = req.params.id;
    const books = await Book.findByIdAndDelete(id);
    res.status(200).json({ books });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
