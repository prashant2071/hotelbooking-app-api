const express = require("express");
const router = express.Router();
const {createRoom,updateRoom,deleteRoom, getRooms,getRoomById} =require("../controller/roomController");
const { verifyUser, verifyAdmin } = require("../utilities/verifyToken");


//GET ALL
router.get("/",verifyAdmin,getRooms);

//GET BY ID
router.get("/:id",verifyAdmin,getRoomById);

//CREATE
router.post("/:hotelId",verifyAdmin,createRoom );

//UPDATE
router.patch("/:id",verifyAdmin,updateRoom);

//DELETE
router.delete("/:id/:hotelId",verifyAdmin,deleteRoom );

module.exports = router;
