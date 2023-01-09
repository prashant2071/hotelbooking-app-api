const express = require("express");
const hotelModel = require("../models/hotelModel");
const {getAllHotels,getHotelById,createHotel,updateHotel,replaceHotel,deleteHotel} =require("../controller/hotelController")
const router = express.Router();


router.get("/",getAllHotels );
router.get("/:id",getHotelById );
router.post("/",createHotel );
router.patch("/:id", updateHotel);
router.put("/:id",replaceHotel);
router.delete("/",deleteHotel );
module.exports = router;
