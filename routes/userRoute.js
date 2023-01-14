const express = require("express");
const router = express.Router();
const {createUser,getAllUsers,getUserById,updateUser,deleteUser,replaceUser} =require("../controller/userController");
const verifytoken = require("../utilities/verifyToken");
const {successMsg} = require("../utilities/success");


router.get("/",getAllUsers );
router.get("/checkauthentication",verifytoken,(req,res,next)=>{
    res.json({
        ...successMsg,
        message:"token is valid",
    })
})
router.get("/:id",getUserById );
router.post("/",createUser );
router.patch("/:id", updateUser);
router.put("/:id",replaceUser);
router.delete("/:id",deleteUser );
module.exports = router;