const express = require("express");
const router = express.Router();
const {
  getAllHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
  countByCity,
  countByType
} = require("../controller/hotelController");
const { verifyUser, verifyAdmin } = require("../utilities/verifyToken");

//GET ALL
router.get("/", getAllHotels);


//GET COUNT BY CITY
router.get("/countByCity", countByCity);

//GET COUNT BY TYPE
router.get("/countByType", countByType);

//GET BY ID
router.get("/:id", getHotelById);

//CREATE
router.post("/", verifyAdmin, createHotel);

//CREATE
router.patch("/:id", verifyAdmin, updateHotel);
// router.put("/:id",verifyAdmin,replaceHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

module.exports = router;
