const express = require("express");
const router = express.Router();
const {createUser} =require("../controller/userController")


// router.get("/",getAllHotels );
// router.get("/:id",getHotelById );
router.post("/",createUser );
// router.patch("/:id", updateHotel);
// router.put("/:id",replaceHotel);
// router.delete("/:id",deleteHotel );
module.exports = router;