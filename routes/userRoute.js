const express = require("express");
const router = express.Router();
const {getAllUsers,getUserById,updateUser,deleteUser} =require("../controller/userController");
const {verifyUser,verifytoken, verifyAdmin} = require("../utilities/verifyToken");
const {successMsg} = require("../utilities/success");


router.get("/",verifyAdmin,getAllUsers );
router.get("/:id",verifyUser,getUserById );
router.patch("/:id",verifyUser,updateUser);
// router.put("/:id",verifyUser,replaceUser);
router.delete("/:id",verifyUser,deleteUser );
module.exports = router;