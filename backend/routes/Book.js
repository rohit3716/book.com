const express = require('express');
const router = express.Router();

//import the required controllers and middleware functions

const { createBook, updateBook, deleteBook, getAllBooks, getBook, getUserBooks } = require('../controllers/Books');

const {auth} = require('../middleware/auth')

//Route for creating books
router.post("/createBook", auth,  createBook);

//Route for updating books
router.put("/updateBook", auth, updateBook);

//Route for deleting books
router.delete('/deleteBook', auth, deleteBook);

//route for getting all the books
router.get("/getAllBooks", getAllBooks);

//route for getting single books
router.get("/book", getBook)

//route for getting all books associated with the user
router.get("/getUserBooks", auth,  getUserBooks);

module.exports = router;