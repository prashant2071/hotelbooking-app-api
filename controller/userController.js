const handleError = require('../helpers/handleError');
const nextHandlers = require('../helpers/nextHandlers');
const userModel = require('../models/userModel')


const createUser =async (req,res,next) =>{
    try{
        console.log("the body data is",req.body)
    const user = new userModel(req.body);
    await user.save();
    res.status(200).json({
        message:"user created successfully",
        data:user
    })
}catch(err){
    const errors= handleError(err);
    // errors.model="user"
    // res.status(500).json(errors)
    next(nextHandlers("user creation failed",errors))
}


}
module.exports={
    createUser
}