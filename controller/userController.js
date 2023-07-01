const nextHandlers = require("../utilities/nextHandlers");
const UsersModel = require("../models/userModel");
const { successMsg } = require("../utilities/success");
const {handleError} = require("../errorModelHandler/handleUserError");

//GET ALL USER
const getAllUsers = async (req,res,next) =>{
    const {id} = req.params
    try {
      const updatedUsers = await UsersModel.find()
      res.json({
        ...successMsg,
        message: "fetched all Users successfully",
        data: updatedUsers,
      });
    } 
    catch (err) {
        next(nextHandlers("Users fetching failed",err))
      }
    }
//GET
const getUserById = async (req,res,next) =>{
    const {id} = req.params
    try {
      const user = await UsersModel.findById(id)
      res.json({
        ...successMsg,
        message: "User found successfully",
        data: user,
      });
    } 
    catch (err) {
      next(nextHandlers("failed to find Users",err))
      }
    }
//UPDATE
const updateUser = async (req,res,next) =>{
    const {id} = req.params
    try {
      const updatedUsers = await UsersModel.findByIdAndUpdate(id,{$set:req.body},{new:true})
      res.json({
        ...successMsg,
        message: "User updated successfully",
        data: updatedUsers,
      });
    } 
    catch (err) {
        next(nextHandlers("User update failed!!",err))
      }
    }

//DELETE
const deleteUser = async (req,res,next) =>{
    const {id} = req.params
    try {
      const deletedUsers = await UsersModel.findByIdAndDelete(id,{$set:req.body})
      res.json({
        ...successMsg,
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
    updateUser,
    deleteUser
}