const express =require('express')
const dotenv = require('dotenv')
dotenv.config();
const app =express();
const connectDatabase = require('./database/connection');
connectDatabase();





app.listen(8080,(err)=>{
    if(err){
        console.log("server connection failed!")
        return;
    }
    else{
        console.log("server connected successfully")
    }
})