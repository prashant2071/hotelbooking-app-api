const roomModel = require('../models/roomModel');
const hotelModel = require('../models/hotelModel');
const nextHandlers =require('../utilities/nextHandlers');
const handleError = require('../errorModelHandler/handleUserError');
const { successMsg } = require('../utilities/success');


const createRoom = async(req,res,next) =>{
    try{
    const hotelId = req.params.hotelId;
    const newRoom = new roomModel(req.body);
    const savedRoom = await newRoom.save();
    try{
        await hotelModel.findByIdAndUpdate(hotelId,{
            $push:{rooms:savedRoom._id}
        })
    }
    catch(err){
        next(err)
    }
    res.json({
        ...successMsg,
        data:savedRoom
    })
    }
    catch(err){
        const errros = handleError(err);
        next(nextHandlers("Room saving failed",err));
    }
}
const updateRoom = async (req,res,next) =>{
    const {id} = req.params
    try {
      const updatedRoom = await roomModel.findByIdAndUpdate(id,{$set:req.body},{new:true})
      res.json({
        ...successMsg,
        message: "room updated successfully",
        data: updatedRoom,
      });
    } 
    catch (err) {
        next(nextHandlers("room update failed!!",err))
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
const deleteRoom = async (req,res,next) =>{
    const {id} = req.params
    try {
      const deletedRoom = await roomModel.findByIdAndDelete(id,{$set:req.body})
      res.json({
        ...successMsg,
        message: "room deleted successfully",
        data: deletedRoom,
      });
    } 
    catch (err) {
        next(nextHandlers("room deletion failed!!",err))
      }
    }

module.exports={

    createRoom,
    updateRoom,
    deleteRoom
}
