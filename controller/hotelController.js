const hotelModel = require("../models/hotelModel");

const getAllHotels = async (req,res) =>{

}
const getHotelById = async (req,res) =>{

}
const createHotel = async (req,res) =>{
    const Hotel = new hotelModel(req.body);
    try {
      const savedHotel = await Hotel.save();
      res.status(200).json({
        message: "hotel saved successfully",
        data: savedHotel,
      });
    } 
    catch (err) {
      if (err.code === 11000) {
        res.status(500).json({
          errMessage: "Duplicate data",
          message:"same data already exist",
          errorCode:err.code
        });
      } else {
        res.status(500).json({
          message: err.message,
        });
      }
    }
}
const updateHotel = async (req,res) =>{
    const {id} = req.params
    try {
      const updatedHotel = await hotelModel.findByIdAndUpdate(id,{$set:req.body},{new:true})
      res.status(200).json({
        message: "hotel saved successfully",
        data: updatedHotel,
      });
    } 
    catch (err) {
        res.status(500).json({
            message:"product update failed"
        })
      }
    }

const replaceHotel = async (req,res) =>{
    const {id} = req.params
    try {
      const replacedHotel = await hotelModel.findOneAndReplace(id,{$set:req.body},{new:true})
      res.status(200).json({
        message: "hotel saved successfully",
        data: replacedHotel,
      });
    } 
    catch (err) {
        res.status(500).json({
            message:"product replaced failed"
        })
      }
    }
const deleteHotel = async (req,res) =>{

}
module.exports={
    getAllHotels,
    getHoteById,
    createHotel,
    updateHotel,
    replaceHotel,
    deleteHotel
}