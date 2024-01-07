const express = require('express');
const router = express.Router();

//importing the required controllers and middlewwares function


const { signup, login } = require('../controllers/Auth');

// const { auth } = require('../middleware/auth');

//Routes for login signup and authentication

//route for user signup
router.post("/signup", signup);

//route for user login
router.post("/login", login);

//exports the router
module.exports = router;