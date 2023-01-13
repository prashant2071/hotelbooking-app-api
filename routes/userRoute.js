const express = require("express");
const router = express.Router();
const {createUser,getAllUsers,getUserById,updateUser,deleteUser,replaceUser} =require("../controller/userController")


router.get("/",getAllUsers );
router.get("/:id",getUserById );
router.post("/",createUser );
router.patch("/:id", updateUser);
router.put("/:id",replaceUser);
router.delete("/:id",deleteUser );
module.exports = router;