const handleUserError = require('../errorModelHandler/handleUserError');
const nextHandlers = require('../helpers/nextHandlers');
const bcrypt = require('bcryptjs')
const userModel = require('../models/userModel')


const registerUser =async (req,res,next) =>{
    try{
    const {username,email,password} = req.body   
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt); 
    const user = new userModel({
        username:username,
        password:hash,
        email:email
    });
    await user.save();
    res.status(200).json({
        message:"user created successfully",
        data:user
    })
}catch(err){
    const errors= handleUserError(err);
    next(nextHandlers("user creation failed",errors))
}


}
const loginUser =async (req,res,next) =>{
    try{
    const {username,password} = req.body;
    const user = await userModel.findOne({username:username})
    if(!user) {
        return next("User not found");
    }
    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if(!isPasswordCorrect){
    return next("Wrong username or password")}
    res.status(200).json({
        success:true,
        message:"login successfully",
        data:user
    })
}catch(err){
    const errors= handleUserError(err);
    next(nextHandlers("user creation failed",errors))
}


}
module.exports={
    registerUser,
    loginUser
}
