const roomModel = require("../models/roomModel");
const hotelModel = require("../models/hotelModel");
const nextHandlers = require("../utilities/nextHandlers");
const {handleError} = require("../errorModelHandler/handleUserError");
const { successMsg } = require("../utilities/success");

//GETALL
const getRooms = async (req, res, next) => {
  try {
    const room = await roomModel.find();
    if (!room[0]) return next(nextHandlers("No room found!", { status: 404 }));
    res.json({
      ...successMsg,
      message: "rooms fetched successfully",
      data: room,
    });
  } catch (err) {
    next(nextHandlers("fetching rooms failed!!", err));
  }
};

//CREATE
const createRoom = async (req, res, next) => {
  const { hotelId } = req.params;
  const newRoom = new roomModel(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await hotelModel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(nextHandlers("hotel updating failed!", err));
    }
    res.json({
      ...successMsg,
      message: "room created successfully",
      data: savedRoom,
    });
  } catch (err) {
    const errors = handleError(err);
    next(nextHandlers("Room saving failed", errors));
  }
};

//GET
const getRoomById = async (req, res, next) => {
  const { id } = req.params;
  console.log("the id is ", id);
  try {
    const room = await roomModel.findById(id);
    console.log("the room data ", room);
    if (!room) return next(nextHandlers("No room found!", { status: 404 }));
    res.json({
      ...successMsg,
      message: "room fetched successfully",
      data: room,
    });
  } catch (err) {
    next(nextHandlers("fetching room failed!!", err));
  }
};

//UPDATE
const updateRoom = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedRoom = await roomModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedRoom)
      return next(nextHandlers("no room found", { status: 404 }));
    res.json({
      ...successMsg,
      message: "room updated successfully",
      data: updatedRoom,
    });
  } catch (err) {
    next(nextHandlers("room update failed!!", err));
  }
};

//DELETE
const deleteRoom = async (req, res, next) => {
  const { id, hotelId } = req.params;

  try {
    const deletedRoom = await roomModel.findByIdAndDelete(id);
    if (!deletedRoom)
      return next(nextHandlers("item not found", { status: 404 }));
    try {
      await hotelModel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: id },
      });
    } catch (err) {
      next(err);
    }
    res.json({
      ...successMsg,
      message: "room deleted successfully",
      data: deletedRoom,
    });
  } catch (err) {
    next(nextHandlers("room deletion failed!!", err));
  }
};

module.exports = {
  getRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,

};
