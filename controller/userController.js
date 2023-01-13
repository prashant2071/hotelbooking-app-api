const nextHandlers = require("../helpers/nextHandlers");
const UsersModel = require("../models/userModel");

const getAllUsers = async (req,res,next) =>{
    const {id} = req.params
    try {
      const updatedUsers = await UsersModel.find()
      res.status(200).json({
        message: "fetched all Users successfully",
        data: updatedUsers,
      });
    } 
    catch (err) {
        next(nextHandlers("Users fetching failed",err))
      }
    }
const getUserById = async (req,res,next) =>{
    const {id} = req.params
    try {
      const user = await UsersModel.findById(id)
      res.status(200).json({
        message: "User found successfully",
        data: user,
      });
    } 
    catch (err) {
      next(nextHandlers("failed to find Users",err))
      }
    }
const createUser = async (req,res,next) =>{
    const user = new UsersModel(req.body);
    try {
      const savedUsers = await user.save();
      res.status(200).json({
        message: "User created successfully",
        data: savedUsers,
      });
    } 
    catch (err) {
      if (err.code === 11000) {
        next(nextHandlers("duplicate data already exist",err))
      } else {
        next(nextHandlers("User creation failed",err));
      }
    }
}
const updateUser = async (req,res,next) =>{
    const {id} = req.params
    try {
      const updatedUsers = await UsersModel.findByIdAndUpdate(id,{$set:req.body},{new:true})
      res.status(200).json({
        message: "User updated successfully",
        data: updatedUsers,
      });
    } 
    catch (err) {
        next(nextHandlers("User update failed!!",err))
      }
    }

const replaceUser = async (req,res,next) =>{
    const {id} = req.params
    try {
      const replacedUsers = await UsersModel.findOneAndReplace(id,{$set:req.body},{new:true})
      res.status(200).json({
        message: "User replaced successfully",
        data: replacedUsers,
      });
    } 
    catch (err) {
        next(nextHandlers("User replacing failed!!",err))
      }
    }
const deleteUser = async (req,res,next) =>{
    const {id} = req.params
    try {
      const deletedUsers = await UsersModel.findByIdAndDelete(id,{$set:req.body})
      res.status(200).json({
        message: "User deleted successfully",
        data: deletedUsers,
      });
    } 
    catch (err) {
        next(nextHandlers("User deletion failed!!",err))
      }
    }

module.exports={
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    replaceUser,
    deleteUser
}