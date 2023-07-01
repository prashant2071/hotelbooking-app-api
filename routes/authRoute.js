const {Router} =require('express');
const { registerUser,loginUser } = require('../controller/authController');
const router =Router();

//REGISTER
router.post('/register',registerUser)

//LOGIN
router.post('/login',loginUser)

module.exports =router;