// const handleUserError = require('../errorModelHandler/handleUserError');
// const nextHandlers = require('../helpers/nextHandlers');
// const userModel = require('../models/userModel')


// const createUser =async (req,res,next) =>{
//     try{
//         console.log("the body data is",req.body)
//     const user = new userModel(req.body);
//     await user.save();
//     res.status(200).json({
//         message:"user created successfully",
//         data:user
//     })
// }catch(err){
//     const errors= handleUserError(err);
//     next(nextHandlers("user creation failed",errors))
// }


// }
// module.exports={
//     createUser
// }