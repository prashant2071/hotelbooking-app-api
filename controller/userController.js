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
        next(nextHandlers("Users fetching faild",err))
      }
    }
const getUserById = async (req,res,next) =>{
    const {id} = req.params
    try {
      const getUserById = await UsersModel.findById(id)
      res.status(200).json({
        message: "Users found successfully",
        data: getUserById,
      });
    } 
    catch (err) {
      next(nextHandlers("failed to find Users",err))
      }
    }
const createUser = async (req,res,next) =>{
    const Users = new UsersModel(req.body);
    try {
      const savedUsers = await Users.save();
      res.status(200).json({
        message: "Users created successfully",
        data: savedUsers,
      });
    } 
    catch (err) {
      if (err.code === 11000) {
        next(nextHandlers("duplicate data already exist",err))
      } else {
        next(nextHandlers("Users creation failed",err));
      }
    }
}
const updateUser = async (req,res,next) =>{
    const {id} = req.params
    try {
      const updatedUsers = await UsersModel.findByIdAndUpdate(id,{$set:req.body},{new:true})
      res.status(200).json({
        message: "Users updated successfully",
        data: updatedUsers,
      });
    } 
    catch (err) {
        next(nextHandlers("Users update failed!!",err))
      }
    }

const replaceUser = async (req,res,next) =>{
    const {id} = req.params
    try {
      const replacedUsers = await UsersModel.findOneAndReplace(id,{$set:req.body},{new:true})
      res.status(200).json({
        message: "Users replaced successfully",
        data: replacedUsers,
      });
    } 
    catch (err) {
        next(nextHandlers("Users replacing failed!!",err))
      }
    }
const deleteUser = async (req,res,next) =>{
    const {id} = req.params
    try {
      const deletedUsers = await UsersModel.findByIdAndDelete(id,{$set:req.body})
      res.status(200).json({
        message: "Users deleted successfully",
        data: deletedUsers,
      });
    } 
    catch (err) {
        next(nextHandlers("Users deletion failed!!",err))
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