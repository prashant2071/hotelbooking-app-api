const nextHandlers = require('./nextHandlers');
const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../config/envCrediantials')
 
const verifytoken = (req,res,next) =>{
    try{
    const token = req.cookie.access_token;
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
module.exports=verifytoken