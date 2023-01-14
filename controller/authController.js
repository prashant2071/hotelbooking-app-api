const handleUserError = require('../errorModelHandler/handleUserError');
const nextHandlers = require('../utilities/nextHandlers');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {SECRET_KEY} = require('../config/envCrediantials')
const userModel = require('../models/userModel');
const { successMsg } = require('../utilities/success');


const registerUser =async (req,res,next) =>{
    try{
    const {username,email,password,role,isAdmin} = req.body   
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt); 
    const user = new userModel({
        username:username,
        password:hash,
        email:email,
        role:role,
        isAdmin:isAdmin
    });
    await user.save();
    res.json({
        ...successMsg,
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
    const {username} = req.body;
    const user = await userModel.findOne({username:username})
    if(!user) {
        return next("User not found");
    }
    const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password);
    if(!isPasswordCorrect){
    return next("Wrong username or password")
}
const {isAdmin,password,...rest} = user._doc;
    const token=jwt.sign({
        id:user._id,
        isAdmin:isAdmin
    },SECRET_KEY.KEY)
    res.cookie("access_token",token,
    {httpOnly:true},)
    .json({
        ...successMsg,
        message:"login successfully",
        data:rest
    })
}catch(err){
    next(nextHandlers("login failed!",err))
}


}
module.exports={
    registerUser,
    loginUser
}
