const express = require("express");
const router = express.Router();
const {getAllHotels,getHotelById,createHotel,updateHotel,deleteHotel} =require("../controller/hotelController");
const { verifyUser, verifyAdmin } = require("../utilities/verifyToken");


router.get("/",verifyUser,getAllHotels );
router.get("/:id",getHotelById );
router.post("/",verifyAdmin,createHotel );
router.patch("/:id",verifyAdmin, updateHotel);
// router.put("/:id",verifyAdmin,replaceHotel);
router.delete("/:id",verifyAdmin,deleteHotel );
module.exports = router;
