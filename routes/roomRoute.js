const express = require("express");
const router = express.Router();
const {createRoom,updateRoom,deleteRoom, getRooms,getRoomById} =require("../controller/roomController");
const { verifyUser, verifyAdmin } = require("../utilities/verifyToken");


router.get("/",verifyAdmin,getRooms);
router.get("/:id",verifyAdmin,getRoomById);
router.post("/:hotelId",verifyAdmin,createRoom );
router.patch("/:id",verifyAdmin,updateRoom);
router.delete("/:id/:hotelId",verifyAdmin,deleteRoom );
module.exports = router;
