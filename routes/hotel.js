const express = require('express');
const hotelModel = require('../models/hotelModel');
const router = express.Router();

router.post('/',async(req,res)=>{
    const Hotel= new hotelModel(req.body )
    try{
        const savedHotel = await Hotel.save();
        res.status(200).json({
            message:"hotel saved successfully",
            data:savedHotel
        });
    }
    catch(err){
        if(err.code ===11000){
            res.status(500).json({
                message: "duplicate data"
            })
        }else{
            res.status(500).json({
                message:err.message
            })

        }
    }
}) 
module.exports=router;