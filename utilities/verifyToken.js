const nextHandlers = require('./nextHandlers');
const jet = require('jsonwebtoken');
 
const verifytoken = async(req,res,next) =>{
    const token = req.cookie.access_token;
    if(!token){
        return next(nextHandlers("you are not authenticated",{status:401}))
    }
}
module.exports=verifytoken