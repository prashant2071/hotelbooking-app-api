const hotelModel = require("../models/hotelModel");

const getAllHotels = async (req,res) =>{
    const {id} = req.params
    try {
      const updatedHotel = await hotelModel.find()
      res.status(200).json({
        message: "fetched all hotel successfully",
        data: updatedHotel,
      });
    } 
    catch (err) {
        res.status(500).json({
            message:"fetched hotel failed"
        })
      }
    }
const getHotelById = async (req,res) =>{
    const {id} = req.params
    try {
      const getHotelById = await hotelModel.findById(id)
      res.status(200).json({
        message: "hotel found successfully",
        data: getHotelById,
      });
    } 
    catch (err) {
        res.status(500).json({
            message:"hotel fetched by id failed"
        })
      }
    }
const createHotel = async (req,res) =>{
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
        message: "hotel updated successfully",
        data: updatedHotel,
      });
    } 
    catch (err) {
        res.status(500).json({
            message:"hotel update failed"
        })
      }
    }

const replaceHotel = async (req,res) =>{
    const {id} = req.params
    try {
      const replacedHotel = await hotelModel.findOneAndReplace(id,{$set:req.body},{new:true})
      res.status(200).json({
        message: "hotel replaced successfully",
        data: replacedHotel,
      });
    } 
    catch (err) {
        res.status(500).json({
            message:"hotel replaced failed"
        })
      }
    }
const deleteHotel = async (req,res) =>{
    const {id} = req.params
    try {
      const deletedHotel = await hotelModel.findByIdAndDelete(id,{$set:req.body})
      res.status(200).json({
        message: "hotel deleted successfully",
        data: deletedHotel,
      });
    } 
    catch (err) {
        res.status(500).json({
            message:"hotel deletion failed"
        })
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