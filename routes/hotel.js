const express = require("express");
const hotelModel = require("../models/hotelModel");
const {getAllHotels,getHotelByIdgit,createHotel,updateHotel,replaceHotel,deleteHotel} =require("../controller/hotelController")
const router = express.Router();


router.post("/hotel",createHotel );
router.patch("/hotel/:id", updateHotel);
router.put("/:id",replaceHotel);
module.exports = router;
