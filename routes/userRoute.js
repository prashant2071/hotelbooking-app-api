const express = require("express");
const router = express.Router();
const {getAllUsers,getUserById,updateUser,deleteUser} =require("../controller/userController");
const {verifyUser,verifytoken, verifyAdmin} = require("../utilities/verifyToken");
const {successMsg} = require("../utilities/success");

//GET ALL
router.get("/",verifyAdmin,getAllUsers );

// GET ALL BY ID
router.get("/:id",verifyUser,getUserById );

// UPDATE
router.patch("/:id",verifyUser,updateUser);
// router.put("/:id",verifyUser,replaceUser);

//DELETE
router.delete("/:id",verifyUser,deleteUser );
module.exports = router;