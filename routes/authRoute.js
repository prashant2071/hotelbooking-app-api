const {Router} =require('express');
const { registerUser,loginUser } = require('../controller/authController');
const router =Router();

// router.get('/',(req,res)=>{
// res.send('hello from auth route')
// })
router.post('/register',registerUser)
router.post('/login',loginUser)

module.exports =router;