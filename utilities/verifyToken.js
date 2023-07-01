const nextHandlers = require('./nextHandlers');
const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../config/envCrediantials')
 
//VERIFY TOKEN
const verifytoken = (req,res,next) =>{
    console.log("the cookie is",req.cookies)
    try{
    const token = req.cookies.access_token;
    if(!token){
        return next(nextHandlers("you are not authenticated",{status:401}))
    }
    jwt.verify(token,SECRET_KEY.KEY,(err,user)=>{
        if(err) return next(nextHandlers("token is not valid!",{status:403,...err}))
        req.user=user;
        next()
    })
}
catch(err){
    next(nextHandlers("token authentication failed",err))
}
}

//VERIFY USER
const verifyUser = (req,res,next) =>{
    verifytoken (req,res,next,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next()
        }
        else{
            return next(nextHandlers("you are not authenticated!",{status:403}))
        }
    })
}

//VERIFY ADMIN
const verifyAdmin = (req,res,next) =>{
        verifytoken (req,res,next,()=>{
            if(req.user.isAdmin){
                next()
            }
            else{
                return next(nextHandlers("you are not authorize!",{status:403}))
            }
        })
}
module.exports={
    verifytoken,
    verifyUser,
    verifyAdmin
}