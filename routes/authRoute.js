const express =require('express');
const router =express.Router();

router.get('/',(req,res)=>{
res.send('hello from auth route')
})
router.get('/register',(req,res)=>{
    res.send("hello this is register endpoint")
})

module.exports =router;