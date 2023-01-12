const nextHandlers = require("../helpers/nextHandlers");
const hotelModel = require("../models/hotelModel");

const getAllHotels = async (req,res,next) =>{
    const {id} = req.params
    try {
      const updatedHotel = await hotelModel.find()
      res.status(200).json({
        message: "fetched all hotel successfully",
        data: updatedHotel,
      });
    } 
    catch (err) {
        next(nextHandlers("hotel fetching faild",err.status,err.code,err.stack))
      }
    }
const getHotelById = async (req,res,next) =>{
    const {id} = req.params
    try {
      const getHotelById = await hotelModel.findById(id)
      res.status(200).json({
        message: "hotel found successfully",
        data: getHotelById,
      });
    } 
    catch (err) {
      next(nextHandlers(err.message,err.status,err.code,err.stack))
      }
    }
const createHotel = async (req,res,next) =>{
    const Hotel = new hotelModel(req.body);
    try {
      const savedHotel = await Hotel.save();
      res.status(200).json({
        message: "hotel created successfully",
        data: savedHotel,
      });
    } 
    catch (err) {
      if (err.code === 11000) {
        // next({
        //   message :"Duplicate data, data already exist",
        //   status:500,
        //   code:err.code,
        //   stack:err.stack
        // })
        next(nextHandlers("duplicate data already exist",500,err.code,err.stack))
      } else {
        next(nextHandlers(err.message,err.status,err.code,err.stack));
      }
    }
}
const updateHotel = async (req,res,next) =>{
    const {id} = req.params
    try {
      const updatedHotel = await hotelModel.findByIdAndUpdate(id,{$set:req.body},{new:true})
      res.status(200).json({
        message: "hotel updated successfully",
        data: updatedHotel,
      });
    } 
    catch (err) {
        next(nextHandlers("hotel update failed",err.status,err.code,err.stack))
      }
    }

const replaceHotel = async (req,res,next) =>{
    const {id} = req.params
    try {
      const replacedHotel = await hotelModel.findOneAndReplace(id,{$set:req.body},{new:true})
      res.status(200).json({
        message: "hotel replaced successfully",
        data: replacedHotel,
      });
    } 
    catch (err) {
        next(nextHandlers("hotel replacing failed",err.status,err.code,err.stack))
      }
    }
const deleteHotel = async (req,res,next) =>{
    const {id} = req.params
    try {
      const deletedHotel = await hotelModel.findByIdAndDelete(id,{$set:req.body})
      res.status(200).json({
        message: "hotel deleted successfully",
        data: deletedHotel,
      });
    } 
    catch (err) {
        next(nextHandlers("hotel deletion failed",err.status,err.code,err.stack))
      }
    }

module.exports={
    getAllHotels,
    getHotelById,
    createHotel,
    updateHotel,
    replaceHotel,
    deleteHotel
}