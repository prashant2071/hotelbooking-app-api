const express = require("express");
const router = express.Router();
const {getAllUsers,getUserById,updateUser,deleteUser} =require("../controller/userController");
const {verifyUser,verifytoken, verifyAdmin} = require("../utilities/verifyToken");
const {successMsg} = require("../utilities/success");


router.get("/",verifyAdmin,getAllUsers );
router.get("/checkauthentication",verifytoken,(req,res,next)=>{
    res.json({
        ...successMsg,
        message:"token is valid",
    })
})
router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.json({
        ...successMsg,
        message:"user is valid you can delete and remove",
    })
})
router.get("/checkisAdmin/:id",verifyAdmin,(req,res,next)=>{
    res.json({
        ...successMsg,
        message:"hi admin you are admin do as you like",
    })
})
router.get("/:id",verifyUser,getUserById );
router.patch("/:id",verifyUser,updateUser);
// router.put("/:id",verifyUser,replaceUser);
router.delete("/:id",verifyUser,deleteUser );
module.exports = router;