const nextHandlers = require("../utilities/nextHandlers");
const hotelModel = require("../models/hotelModel");
const { successMsg } = require("../utilities/success");

const getAllHotels = async (req,res,next) =>{
    const {id} = req.params
    try {
      const updatedHotel = await hotelModel.find()
      res.json({
        ...successMsg,
        message: "fetched all hotel successfully",
        data: updatedHotel,
      });
    } 
    catch (err) {
        next(nextHandlers("hotel fetching faild",err))
      }
    }
const getHotelById = async (req,res,next) =>{
    const {id} = req.params
    try {
      const getHotelById = await hotelModel.findById(id)
      res.json({
        ...successMsg,
        message: "hotel found successfully",
        data: getHotelById,
      });
    } 
    catch (err) {
      next(nextHandlers("failed to find hotel",err))
      }
    }
const createHotel = async (req,res,next) =>{
    const Hotel = new hotelModel(req.body);
    try {
      const savedHotel = await Hotel.save();
      res.json({
        ...successMsg,
        message: "hotel created successfully",
        data: savedHotel,
      });
    } 
    catch (err) {
      if (err.code === 11000) {
        next(nextHandlers("duplicate data already exist",err))
      } else {
        next(nextHandlers("hotel creation failed",err));
      }
    }
}
const updateHotel = async (req,res,next) =>{
    const {id} = req.params
    try {
      const updatedHotel = await hotelModel.findByIdAndUpdate(id,{$set:req.body},{new:true})
      res.json({
        ...successMsg,
        message: "hotel updated successfully",
        data: updatedHotel,
      });
    } 
    catch (err) {
        next(nextHandlers("hotel update failed!!",err))
      }
    }

// const replaceHotel = async (req,res,next) =>{
//     const {id} = req.params
//     try {
//       const replacedHotel = await hotelModel.findOneAndReplace(id,{$set:req.body},{new:true})
//       res.json({
//         ...successMsg,
//         message: "hotel replaced successfully",
//         data: replacedHotel,
//       });
//     } 
//     catch (err) {
//         next(nextHandlers("hotel replacing failed!!",err))
//       }
//     }
const deleteHotel = async (req,res,next) =>{
    const {id} = req.params
    try {
      const deletedHotel = await hotelModel.findByIdAndDelete(id,{$set:req.body})
      res.json({
        ...successMsg,
        message: "hotel deleted successfully",
        data: deletedHotel,
      });
    } 
    catch (err) {
        next(nextHandlers("hotel deletion failed!!",err))
      }
    }

module.exports={
    getAllHotels,
    getHotelById,
    createHotel,
    updateHotel,
    deleteHotel
}